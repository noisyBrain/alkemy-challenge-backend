//                        .,,uod8B8bou,,.
//               ..,uod8BBBBBBBBBBBBBBBBRPFT?l!i:.
//          ,=m8BBBBBBBBBBBBBBBRPFT?!||||||||||||||
//          !...:!TVBBBRPFT||||||||||!!^^""'   ||||
//          !.......:!?|||||!!^^""'            ||||
//          !.........||||                     ||||
//          !.........||||                     ||||
//          !.........|||| "alkemy-challenge"  ||||
//          !.........||||                     ||||
//          !.........||||                     ||||
//          !.........||||                     ||||
//          `.........||||                    ,||||
//           .;.......||||               _.-!!|||||
//    .,uodWBBBBb.....||||       _.-!!|||||||||!:'
// !YBBBBBBBBBBBBBBb..!|||:..-!!|||||||!iof68BBBBBb....
// !..YBBBBBBBBBBBBBBb!!||||||||!iof68BBBBBBRPFT?!::   `.
// !....YBBBBBBBBBBBBBBbaaitf68BBBBBBRPFT?!:::::::::     `.
// !......YBBBBBBBBBBBBBBBBBBBRPFT?!::::::;:!^"`;:::       `.
// !........YBBBBBBBBBBRPFT?!::::::::::^''...::::::;         iBBbo.
// `..........YBRPFT?!::::::::::::::::::::::::;iof68bo.      WBBBBbo.
//   `..........:::::::::::::::::::::::;iof688888888888b.     `YBBBP^'
//     `........::::::::::::::::;iof688888888888888888888b.     `
//       `......:::::::::;iof688888888888888888888888888888b.
//         `....:::;iof688888888888888888888888888888888899fT!
//           `..::!8888888888888888888888888888888899fT|!^"'
//             `' !!988888888888888888888888899fT|!^"'
//                 `!!8888888888888888899fT|!^"'
//                   `!988888888899fT|!^"'
//                     `!9899fT|!^"'
//                       `!^"'

const PORT = process.env.PORT || 3001
const { db } = require('./src/db.js')
const server = require('./src/app.js');
const seeder = require('./src/libs/seeds.js')

db.sync({ force: false }).then(() => {
    console.log('Database connected')
    server.listen(PORT, () => {
        seeder();
        console.log(`Listening at port ${PORT}`)
    })
}).catch(error => console.error(error))
