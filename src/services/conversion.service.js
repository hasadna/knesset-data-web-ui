import {BlockData} from '../models/BlockData';

const DATA_TYPE = {
	MULTI: Symbol('multi'),
	COMMITTEES: Symbol('committees'),
	COMMITTEES_PER_KNESSET: Symbol('committees_per_knesset'),
	COMMITTEE_ITEM: Symbol('committee_item'),
	COMMITTEE_MEETING: Symbol('committee_meeting'),
	MEMBERS: Symbol('members'),
	MEMBERS_PER_KNESSET: Symbol('members_per_knesset'),
	MEMBER_ITEM: Symbol('member_item'),
};

/*
	for route /members => fetch https://oknesset.org/members/index.json
	for route /members/35 => fetch https://oknesset.org/members/35.json
	for route /committees/952 => fetch https://oknesset.org/committees/952.json
	for route /committees/952/2-0-2071137 => fetch https://oknesset.org/meetings/2/0/2071137.json
*/
function dataTypeByRoute(route) {
	const routeFragments = (route === '/') ? '/' : route.split('/').filter(item => item !== '');
	let type;
	switch (routeFragments[0]) {
		case '/':
			type = DATA_TYPE.MULTI;
			break;

		case 'committees':
			if (routeFragments.length === 1) {
				type = DATA_TYPE.COMMITTEES
			} else if (routeFragments.length === 2) {
				type = (routeFragments[1].includes('knesset')) ? DATA_TYPE.COMMITTEES_PER_KNESSET : DATA_TYPE.COMMITTEE_ITEM
			} else if (routeFragments.length === 3) {
				type = DATA_TYPE.COMMITTEE_MEETING
			}
			break;

		case 'members':
			if (routeFragments.length === 1) {
				type = DATA_TYPE.MEMBERS
			} else if (routeFragments.length === 2) {
				type = (routeFragments[1].includes('knesset')) ? DATA_TYPE.MEMBERS_PER_KNESSET : DATA_TYPE.MEMBER_ITEM
			}
			break;
	}
	return type;
}

export function convertToUIBlocks(data, route) {
	const dataType = dataTypeByRoute(route);
	let convertedData = data;

	switch (dataType) {
		case DATA_TYPE.MULTI:
			convertedData = convertMultipleTypesToUIBlocks(data);
			break;

		case DATA_TYPE.COMMITTEES:
			if (data['knesset_nums']) {
				convertedData = convertCommitteesToUIBlocks(data);
			}
			break;

		case DATA_TYPE.COMMITTEES_PER_KNESSET:
			if (data['committees']) {
				convertedData = convertCommitteesPerKnessetToUIBlocks(data);
			}
			break;

		case DATA_TYPE.MEMBERS:
			if (data['keys']) {
				convertedData = convertMembersToUIBlocks(data);
			}
			break;

		case DATA_TYPE.MEMBERS_PER_KNESSET:
			if (data['factions']) {
				convertedData = convertMembersPerKnessetToUIBlocks(data);
			}
			break;

		default:
			console.error('Conversion data to UI-Blocks failed - could not recognize dataType');
	}
	return convertedData
}

function convertMultipleTypesToUIBlocks(data) {
	const multiTopics = [
		new BlockData({title: 'פריט 1 - עדיין בעבודה'}),
		new BlockData({title: 'פריט 2 - עדיין בעבודה'})
	];
	multiTopics[0].items.push(new BlockData({title: 'example1.1', titleUrl: '/', subtitle: 'example sub title'}));
	multiTopics[0].items.push(new BlockData({title: 'example1.2', titleUrl: '/', subtitle: 'example sub title'}));
	multiTopics[1].items.push(new BlockData({title: 'example2.1', titleUrl: '/', subtitle: 'example sub title'}));
	return {topicBlocks: multiTopics};
}

// ====== Committees ====== //

function convertCommitteesToUIBlocks(data) {
	const topic = new BlockData({title: 'ועדות'});

	data['knesset_nums'].forEach(item => {
		topic.items.push(new BlockData(
			{
				title: 'הכנסת ה-' + item['num'],
				titleUrl: '/committees/knesset-' + item['num'],
				subtitle: item['num_committees'] + ' ועדות'
			}
		));
	});
	return {topicBlocks: [topic]};
}

function convertCommitteesPerKnessetToUIBlocks(data) {
	const topic = new BlockData({
		title: 'ועדות הכנסת ה' + data['knesset_num'],
	});

	data['committees'].forEach(committee => {
		topic.items.push(new BlockData(
			{
				title: committee['name'],
				titleUrl: `/committees/${committee['id']}`,
				subtitle: committee['num_meetings'] + ' ישיבות'
			}
		));
	});
	return {topicBlocks: [topic]};
}

// ====== Members ====== //

function convertMembersToUIBlocks(data) {
	const topic = new BlockData({title: 'חכים', titleUrl: '/members'});

	data['keys'].forEach(key => {
		topic.items.push(new BlockData(
			{
				title: 'הכנסת ה-' + key,
				titleUrl: '/members/knesset-' + key,
				subtitle: data['knessets'][key]['factions'] + 'סיעות'
			}
		));
	});
	return {topicBlocks: [topic]};
}

function convertMembersPerKnessetToUIBlocks(data) {
	const knessetNum = data['knesset_num'];
	const topic = new BlockData({
		title: 'ח"כים הכנסת ה' + knessetNum,
	});

	data['factions'].forEach(faction => {
		topic.items.push(new BlockData({
				title: faction['faction_name'],
				titleUrl: `/members/${knessetNum}/${faction['faction_num']}`,
			}
		));
	});
	return {topicBlocks: [topic]};
}
