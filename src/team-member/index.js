import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';

registerBlockType('blocks-course/team-member', {
	title: __('Team Member', 'team-members'),
	description: __('A team grid.'),
	parent: ['blocks-course/team-members'],
	supports: {
		reusable: false,
		html: false,
	},
	attributes: {
		name: {
			type: 'string',
			source: 'html',
			selector: 'h4',
		},
		bio: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		id: {
			type: '',
		},
		alt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
			default: '',
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		socialLinks: {
			type: 'array',
			default: [],
			source: 'query',
			selector: '.wp-block-blocks-course-team-member-social-links ul li',
			query: {
				icon: {
					source: 'attribute',
					attribute: 'data-icon',
				},
				link: {
					source: 'attribute',
					selector: 'a',
					attribute: 'href',
				},
			},
		},
	},
	icon: 'admin-users',
	edit: Edit,
	save: Save,
});
