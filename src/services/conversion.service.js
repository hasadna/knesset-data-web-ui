import {BlockData} from '../models/BlockData';

const DATA_TYPE = {
	MULTI: Symbol('multi'),
	COMMITTEES_BY_KNESSET_STATISTICS: Symbol('committees_per_knesset_statistics'),
	COMMITTEES_FOR_A_KNESSET: Symbol('committees_per_knesset'),
	COMMITTEE_ITEM: Symbol('committee_item'),
	COMMITTEE_MEETING: Symbol('committee_meeting'),
	LEGISLATION_BY_KNESSET_STATISTICS: Symbol('legislation_per_knesset_statistics'),
	LEGISLATION_FOR_A_KNESSET: Symbol('legislation_per_knesset'),
	MEMBERS: Symbol('members'),
	MEMBERS_PER_KNESSET: Symbol('members_per_knesset'),
	MEMBER_ITEM: Symbol('member_item'),
};

function dataTypeByRoute(route) {
	const routeFragments = (route === '/') ? '/' : route.split('/').filter(item => item !== '');
	let type;
	switch (routeFragments[0]) {
		case '/':
			type = DATA_TYPE.MULTI;
			break;

		case 'committees-by-knesset':
			if (routeFragments.length === 1) {
				type = DATA_TYPE.COMMITTEES_BY_KNESSET_STATISTICS;
			} else if (routeFragments.length === 2) {
				type = DATA_TYPE.COMMITTEES_FOR_A_KNESSET;
			} else if (routeFragments.length === 3) {
				type = DATA_TYPE.COMMITTEE_ITEM;
			} else if (routeFragments.length === 4) {
				type = DATA_TYPE.COMMITTEE_MEETING;
			}
			break;

		case 'legislation-by-knesset':
			if (routeFragments.length === 1) {
				type = DATA_TYPE.LEGISLATION_BY_KNESSET_STATISTICS;
			} else if (routeFragments.length === 2) {
				type = DATA_TYPE.LEGISLATION_FOR_A_KNESSET;
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

		case DATA_TYPE.COMMITTEES_BY_KNESSET_STATISTICS:
				convertedData = convertCommitteesStatisticsToUIBlocks(data);
			break;

		case DATA_TYPE.COMMITTEES_FOR_A_KNESSET:
				convertedData = convertCommitteesPerKnessetToUIBlocks(data);
			break;

		case DATA_TYPE.COMMITTEE_ITEM:
			convertedData = convertCommitteeItemToUIBlocks(data);
			break;

		case DATA_TYPE.LEGISLATION_BY_KNESSET_STATISTICS:
			convertedData = convertLegislationStatisticsToUIBlocks(data);
			break;

		case DATA_TYPE.LEGISLATION_FOR_A_KNESSET:
			convertedData = convertLegislationPerKnessetToUIBlocks(data);
			break;

		case DATA_TYPE.MEMBERS:
				convertedData = convertMembersToUIBlocks(data);
			break;

		case DATA_TYPE.MEMBERS_PER_KNESSET:
				convertedData = convertMembersPerKnessetToUIBlocks(data);
			break;

		default:
			console.error('Conversion data to UI-Blocks failed - could not recognize dataType', dataType);
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

function convertCommitteesStatisticsToUIBlocks(data) {
	const topic = new BlockData({title: 'ועדות'});

	data.forEach(item => {
		topic.items.push(new BlockData(
			{
				title: 'הכנסת ה-' + item['knesset_num'],
				titleUrl: `${currentPath()}/${item['knesset_num']}`,
				subtitle: item['num_committees'] + ' ועדות'
			}
		));
	});
	return {topicBlocks: [topic]};
}

function convertCommitteesPerKnessetToUIBlocks(data) {
	const knessetNum = 20;
	const topic = new BlockData({
		title: 'ועדות הכנסת ה' + knessetNum,
	});

	data.forEach(item => {
		topic.items.push(new BlockData(
			{
				title: item['Name'],
				titleUrl: `${currentPath()}/${item['CommitteeID']}`,
				subtitle: item['num_sessions'] + ' ישיבות'
			}
		));
	});
	return {topicBlocks: [topic]};
}

function convertCommitteeItemToUIBlocks(data) {
	const topic = new BlockData({
		title: ''
	});

	data.forEach(item => {
		topic.items.push(new BlockData(
			{
				title: (item['topics'] && item['topics'].length) ? item['topics'][0] : '',
				titleUrl: `${item['SessionUrl']}`,
				subtitle: 'ישיבה ' + item['TypeDesc']
			}
		));
	});
	return {topicBlocks: [topic]};
}

// ====== Legislation ====== //
function convertLegislationStatisticsToUIBlocks(data) {
	const topic = new BlockData({
		title: 'הצעות חוק'
	});

	data.forEach(item => {
		topic.items.push(new BlockData(
			{
				title: 'הכנסת ה-' + item['KnessetNum'],
				titleUrl: `${currentPath()}/${item['KnessetNum']}`,
				subtitle: item['num_bills'] + ' הצעות חוק'
			}
		));
	});
	return {topicBlocks: [topic]};
}

function convertLegislationPerKnessetToUIBlocks(data) {
	const knessetNum = (data.length > 0) ? data[0]['KnessetNum'] : '';
	const topic = new BlockData({
		title: 'הצעות חוק הכנסת ה' + knessetNum,
	});

	data.forEach(items => {
		topic.items.push(new BlockData(
			{
				title: items['Name'],
				titleUrl: `${currentPath()}/${items['BillID']}`,
				subtitle: 'הצעת חוק ' + items['SubTypeDesc']
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

// ====== utils ====== //
// get current path (remove last slash("/") if exist)
function currentPath() {
	let pathname = window.location.pathname;
	return (pathname[pathname.length - 1] !== '/') ? pathname : pathname.substring(0, pathname.length - 2);
}
