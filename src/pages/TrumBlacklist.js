import TableConstructor from '../components/TableConstructor';

const database = require('../databases/trum_blacklist.json')
const backgroundColors = Object.keys(database).map((name) => (database[name]['is_banned'] ? 'error.main' : 'success.main'))
const blacklist = Object.keys(database).map((name) => ([
		<img height='100px' src={"https://89.179.119.189/trum_blacklist/" + name + '.jpg'} alt={name}></img>,
		name, database[name]['ban_reason'], database[name]['bans_count'], database[name]['ban_period']
	].map(function(item) {
		let items = []
		if (typeof item === 'string') {
			item = item.split('|')
			for (const value in item) {items.push(item[value], <br />)}
                } else {items = item}
                return items
        })
))

export default function TrumBlacklist() {return (
    <TableConstructor headers={['Фото', 'Имя', 'Причина попадания в ЧС', 'Количество банов', 'Период бана']} rows={blacklist} backgroundColors={backgroundColors} />
);}
