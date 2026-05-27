import { writeFileSync } from 'fs';

const out = { cover: '', description: '', episodes: [] };

try {
	const xml = await fetch('https://frivolousscience.substack.com/feed', {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; AstroBot/1.0)' }
	}).then(r => r.text());

	const channelPart = xml.split('<item>')[0];

	const cdnUrl = (channelPart.match(/<image>[\s\S]*?<url>([\s\S]*?)<\/url>/) || [])[1] ?? '';
	const encodedOriginal = cdnUrl.match(/https%3A%2F%2F.+$/)?.[0] ?? '';
	out.cover = encodedOriginal ? decodeURIComponent(encodedOriginal) : cdnUrl;

	out.description = (channelPart.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) || [])[1] ?? '';

	out.episodes = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(m => {
		const item = m[1];
		return {
			title: (item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || [])[1] ?? '',
			link:  (item.match(/<link>(.*?)<\/link>/) || [])[1] ?? '',
			date:  (item.match(/<pubDate>(.*?)<\/pubDate>/) || [])[1] ?? '',
			desc:  (item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) || [])[1] ?? '',
		};
	}).filter(ep => !ep.title.toLowerCase().includes('coming soon')).slice(0, 6);

	console.log(`[podcast] fetched ${out.episodes.length} episodes`);
} catch (e) {
	console.warn('[podcast] fetch failed:', e.message);
}

writeFileSync('src/data/podcast.json', JSON.stringify(out, null, 2));
