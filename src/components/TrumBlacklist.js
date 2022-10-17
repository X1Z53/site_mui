import TableConstructor from './TableConstructor';

var database = require('../databases/trum_blacklist.json')

const backgroundColors = database.map((person) => (person['is_banned'] ? 'error.main' : 'success.main'))

database = database.map((person) => (
    [
	    <img height='100px' src={"http://89.179.119.189/" + person['name'] + '.jpg'} alt={person['name']}></img>,
	    person['name'], person['ban_reason'], person['bans_count'], person['ban_period']
    ].map(function(item) {
	    let items = []
	    if (typeof item === 'string') {
		    item = item.split('|')
		    for (const value in item) {
			    items.push(item[value], <br />)
		    }
	    } else {items = item}
	    return person['is_banned'] ? items : <strike>{items}</strike>
    })
))

export default function TrumBlacklist() {return (
    <TableConstructor headers={['Фото', 'Имя', 'Причина попадания в ЧС', 'Количество банов', 'Период бана']} rows={database} backgroundColors={backgroundColors} />
);}
