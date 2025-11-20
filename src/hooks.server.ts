import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';

const handleParaglide: Handle = ({ event, resolve }) => paraglideMiddleware(event.request, ({ request, locale }) => {
	event.request = request;

	// For this project, only Arabic ('ar') is RTL. Default to LTR otherwise.
	const dir = locale === 'ar' ? 'rtl' : 'ltr';

	return resolve(event, {
		transformPageChunk: ({ html }) => html
			.replace('%paraglide.lang%', locale)
			.replace('%paraglide.dir%', dir)
	});
});

export const handle: Handle = handleParaglide;
