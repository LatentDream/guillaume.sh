import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faApple,
    faWindows,
    type IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export type Distro = "mac" | "windows";

type Props = {
    distro: Distro;
    label?: string;
    size?: "sm" | "lg" | "icon" | "default" | null | undefined;
} & React.HTMLAttributes<HTMLButtonElement>;



type GithubAPIResponse = {
    tag_name: string;
    assets: {
        // url: string;
        // id: number;
        // node_id: string;
        // name: string;
        // label: string;
        // uploader: {
        //   login: string;
        //   id: number;
        //   node_id: string;
        // };
        // content_type: string;
        // state: string;
        // size: number;
        // download_count: number;
        browser_download_url: string;
    }[];
};

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getIcon(distro: Distro): IconDefinition {
    switch (distro) {
        case "mac":
            return faApple;
        case "windows":
            return faWindows;
        // case "linux":
        //     return faLinux;
    }
}

function getLink(distro: Distro, response: GithubAPIResponse): string {
    let link;
    switch (distro) {
        case "mac":
            link = response.assets.find((a) =>
                a.browser_download_url.endsWith(".dmg"),
            );
            break;
        case "windows":
            link = response.assets.find((a) =>
                a.browser_download_url.endsWith(".msi"),
            );
            break;
    }

    if (link) {
        return link.browser_download_url;
    }
    return "";
}

const DownloadButton = ({ distro, label, size, ...props }: Props) => {
    const [data, setData] = useState<GithubAPIResponse | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://api.github.com/repos/latentdream/watson.ai/releases/latest",
            );
            const jsonData = (await response.json()) as GithubAPIResponse;
            console.log(jsonData);
            setData(jsonData);
        };

        fetchData();
    }, []);

    if (!data) {
        return null;
    }

    const link = getLink(distro, data);

    if (link === "") {
        return (
            <Button {...props} disabled>
                <a
                    href={"#"}
                    className="not-content bg-tangerine flex cursor-not-allowed items-center justify-center gap-4 rounded p-4 text-lg no-underline"
                >
                    <FontAwesomeIcon className="h-6 w-6" icon={getIcon(distro)} />{" "}
                    Download for {label ?? capitalize(distro)} is currently not available
                    :(
                </a>
            </Button>
        );
    }

    return (
        <Button
            {...props}
            onClick={() => window.open(link, "_blank")}
            size={size}
        >
            <div className="flex items-center justify-center gap-2">
            <FontAwesomeIcon className="h-4 w-4" icon={getIcon(distro)} />
            <span>{label ?? "Download"}</span>
            </div>
        </Button>
    );
};

export default DownloadButton;
