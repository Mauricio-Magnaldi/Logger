import winston from 'winston'
import config from './config.js'

//Crear el logger
// export const logger = winston.createLogger({
//     transports: [
//         new winston.transports.Console({
//             /*
//             mediante este level le indico que logs quiero ver en consola, desde el que especifico hacia arriba en orden de importancia 
//             */
//             level: "silly",
//             format: winston.format.combine(
//                 winston.format.colorize(),
//                 winston.format.simple()
//             ),
//         }),

//         new winston.transports.File({
//             level: "http",
//             /*
//             Alterna el orden en que muestra las propiedades del objeto, primero el mensaje y después el nivel
//             */

//             format: winston.format.combine(
//                 winston.format.timestamp({format: 'DD-MM-YYYY HH:mm'}),
//                 winston.format.prettyPrint(),
//             ),
//             filename: "./logs-file.log",
//         })
//     ]
// })

const customeLevels = {
    levels: {
        Fatal: 0,
        Warning: 1,
        Information: 2,
    },
    colors: {
        Fatal: "red",
        Warning: "blue",
        Information: "green",
    },
}

// export const logger = winston.createLogger({
//     levels: customeLevels.levels, 
//     transports: [
//             new winston.transports.Console({
//                 level: "Information",
//                 format: winston.format.combine(
//                     winston.format.colorize({colors: customeLevels.colors}),
//                     winston.format.simple()
//                 ),
//             }),
    
//             new winston.transports.File({
//                 level: "Warning",
//                 format: winston.format.combine(
//                     winston.format.timestamp({format: 'DD-MM-YYYY HH:mm'}),
//                     winston.format.prettyPrint(),
//                 ),
//                 filename: "./logs-file.log",
//             })
//         ]
//     })
    

//De acuerdo al valor de la variable environment es el transporte que se creara

export let logger 

if(config.environment === 'production') {
    logger = winston.createLogger ({
        levels: customeLevels.levels,
        transports: [
            new winston.transports.File({
                filename: "./prodLogs.log",
                level: 'Warning',
                format: winston.format.combine(
                    winston.format.timestamp({format: 'DD-MM-YYYY HH:mm'}),
                    winston.format.prettyPrint(),
                ),
            })
        ]
    })
} else {
    logger = winston.createLogger ({
        levels: customeLevels.levels,
        transports: [
            new winston.transports.Console({
                level: 'Information',
                format: winston.format.combine(
                    winston.format.colorize({colors: customeLevels.colors}),
                    winston.format.simple()
                ),
            })
        ]
    })
}