// BlueBadge: https://badge.blue/verify?uri=at%3A%2F%2Fdid%3Aplc%3Acbkjy5n7bk3ax2wplmtjofq2%2Fblue.badge.collection%2F3l2npthykb226
//   static blueBadge = /^https:\/\/badge\.blue\/verify\?uri=(?:at:\/\/|at%3A%2F%2F)(?<uri>.+)$/

export class BlueBadge {
    static DOMAINS = ['badge.blue']

    static async processURL(url, settings, uriMode) {
        const { uri } = this.parseURL(url)
        console.log(`BlueBadge handler recieved: ` + uri)
        return uri
    }

    static parseURL(url) {
        let uri = decodeURIComponent(url.searchParams.get('uri'))
        return {uri}
    }
}