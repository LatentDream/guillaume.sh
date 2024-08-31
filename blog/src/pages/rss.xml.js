import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'

export async function GET(context) {
    const posts = await getCollection('blog')
    const resources = await getCollection('resource')
    const allItems = [...posts, ...resources];

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: allItems.map((item) => ({
            ...item.data,
            link: item.collection === 'blog' ? `/blog/${item.slug}/` : `/resource/${item.slug}/`,
        })),
    });
}
