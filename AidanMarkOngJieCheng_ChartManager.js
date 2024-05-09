//explanation on terminology like metadata, charts, jacket etc are in the readme

module.exports = {
    chartsets: [ //list of all chartsets
        {
            title: "IF:U", //name of song
            artist: "MissoilePunch", //name of composer
            bpm: 190.0, //speed of song in bpm
            charts: {
                BASIC: { //difficulty name
                    difficulty: 6.0, //numeric difficulty rating
                    notecount: 225 //total number of notes in the chart
                },
                ADVANCED: {
                    difficulty: 8.0,
                    notecount: 327
                },
                EXPERT: {
                    difficulty: 12.5,
                    notecount: 616
                },
                MASTER: {
                    difficulty: 14.5,
                    notecount: 949
                }
            },
            jacket: "ifu.jpg" //image accompanying the chart in song select, the images do not exist in this module
        },
        {
            title: "tiny tales continue",
            artist: "黒魔",
            bpm: 188.0,
            charts: {
                BASIC: {
                    difficulty: 5.0,
                    notecount: 198
                },
                ADVANCED: {
                    difficulty: 8.0,
                    notecount: 338
                },
                EXPERT: {
                    difficulty: 11.0,
                    notecount: 498
                },
                MASTER: {
                    difficulty: 13.5,
                    notecount: 818
                }
            },
            jacket: "ttc.jpg"
        },
        {
            title: "raputa",
            artist: "sasakure.UK x TJ.hangneil",
            bpm: 339.0,
            charts: {
                BASIC: {
                    difficulty: 7.0,
                    notecount: 339
                },
                ADVANCED: {
                    difficulty: 8.5,
                    notecount: 424
                },
                EXPERT: {
                    difficulty: 13.5,
                    notecount: 888
                },
                MASTER: {
                    difficulty: 14.5,
                    notecount: 1316
                }
            },
            jacket: "raputa.jpg"
        },
        {
            title: "系ぎて",
            artist: "rintaro soma",
            bpm: 88.0,
            charts: {
                BASIC: {
                    difficulty: 7.0,
                    notecount: 344
                },
                ADVANCED: {
                    difficulty: 10.0,
                    notecount: 539
                },
                EXPERT: {
                    difficulty: 13.5,
                    notecount: 742
                },
                MASTER: {
                    difficulty: 14.5,
                    notecount: 1200
                }
            },
            jacket: "beyondthememories.jpg"
        },
    ],
    printAll() { //prints all details about all chartsets
        this.chartsets.forEach(element => {
            console.log(`Title: ${element.title}`);
            console.log(`Artist: ${element.artist}`);
            console.log(`BPM: ${element.bpm}`);
            console.log(`Jacket: ${element.jacket}`);
            console.log("-----------------------------------------------------------------------------------------------------------------------------");
            console.log(`BASIC chart: \n Difficulty: ${element.charts["BASIC"].difficulty} \n Notecount: ${element.charts["BASIC"].notecount}`);
            console.log(`ADVANCED chart: \n Difficulty: ${element.charts["ADVANCED"].difficulty} \n Notecount: ${element.charts["ADVANCED"].notecount}`);
            console.log(`EXPERT chart: \n Difficulty: ${element.charts["EXPERT"].difficulty} \n Notecount: ${element.charts["EXPERT"].notecount}`);
            console.log(`MASTER chart: \n Difficulty: ${element.charts["MASTER"].difficulty} \n Notecount: ${element.charts["MASTER"].notecount}`);
            console.log("=============================================================================================================================");
        });
    },
    printAllMeta() { //prints all metadata in all chartsets
        this.chartsets.forEach(element => {
            console.log(`Title: ${element.title}`);
            console.log(`Artist: ${element.artist}`);
            console.log(`BPM: ${element.bpm}`);
            console.log(`Jacket: ${element.jacket}`);
            console.log("=============================================================================================================================");
        });
    },
    printAllCharts() { //prints all data of all charts in all chartsets
        this.chartsets.forEach(element => {
            console.log(`Title: ${element.title}`);
            console.log(`BASIC chart: \n Difficulty: ${element.charts["BASIC"].difficulty} \n Notecount: ${element.charts["BASIC"].notecount}`);
            console.log(`ADVANCED chart: \n Difficulty: ${element.charts["ADVANCED"].difficulty} \n Notecount: ${element.charts["ADVANCED"].notecount}`);
            console.log(`EXPERT chart: \n Difficulty: ${element.charts["EXPERT"].difficulty} \n Notecount: ${element.charts["EXPERT"].notecount}`);
            console.log(`MASTER chart: \n Difficulty: ${element.charts["MASTER"].difficulty} \n Notecount: ${element.charts["MASTER"].notecount}`);
            console.log("=============================================================================================================================");
        });
    },

    printAt(i) { //prints all details about chartset at index i
        let element = this.chartsets[i];

        console.log(`Title: ${element.title}`);
        console.log(`Artist: ${element.artist}`);
        console.log(`BPM: ${element.bpm}`);
        console.log(`Jacket: ${element.jacket}`);
        console.log("-----------------------------------------------------------------------------------------------------------------------------");
        console.log(`BASIC chart: \n Difficulty: ${element.charts["BASIC"].difficulty} \n Notecount: ${element.charts["BASIC"].notecount}`);
        console.log(`ADVANCED chart: \n Difficulty: ${element.charts["ADVANCED"].difficulty} \n Notecount: ${element.charts["ADVANCED"].notecount}`);
        console.log(`EXPERT chart: \n Difficulty: ${element.charts["EXPERT"].difficulty} \n Notecount: ${element.charts["EXPERT"].notecount}`);
        console.log(`MASTER chart: \n Difficulty: ${element.charts["MASTER"].difficulty} \n Notecount: ${element.charts["MASTER"].notecount}`);
        console.log("=============================================================================================================================");
    },
    printMetaAt(i) { //prints all metadata of chartset at index i
        let element = this.chartsets[i];

        console.log(`Title: ${element.title}`);
        console.log(`Artist: ${element.artist}`);
        console.log(`BPM: ${element.bpm}`);
        console.log(`Jacket: ${element.jacket}`);
    },
    printChartsAt(i) { //prints data of all charts of chartset at index i
        let element = this.chartsets[i];

        console.log(`Title: ${element.title}`);
        console.log(`BASIC chart: \n Difficulty: ${element.charts["BASIC"].difficulty} \n Notecount: ${element.charts["BASIC"].notecount}`);
        console.log(`ADVANCED chart: \n Difficulty: ${element.charts["ADVANCED"].difficulty} \n Notecount: ${element.charts["ADVANCED"].notecount}`);
        console.log(`EXPERT chart: \n Difficulty: ${element.charts["EXPERT"].difficulty} \n Notecount: ${element.charts["EXPERT"].notecount}`);
        console.log(`MASTER chart: \n Difficulty: ${element.charts["MASTER"].difficulty} \n Notecount: ${element.charts["MASTER"].notecount}`);
    },
    printChartAt(i, difficulty) { //prints data of specific chart whose difficulty name matches the difficulty argument in the chartset at index i
        let element = this.chartsets[i];
        console.log(`Title: ${element.title}`);
        console.log(`${difficulty} chart: \n Difficulty: ${element.charts[difficulty].difficulty} \n Notecount: ${element.charts[difficulty].notecount}`);
    },

    printFromTitle(title) { //prints all data in chartset whose title matches the argument
        this.chartsets.forEach(element => {
            if (element.title == title) {
                console.log(`Title: ${element.title}`);
                console.log(`Artist: ${element.artist}`);
                console.log(`BPM: ${element.bpm}`);
                console.log(`Jacket: ${element.jacket}`);
                console.log("-----------------------------------------------------------------------------------------------------------------------------");
                console.log(`BASIC chart: \n Difficulty: ${element.charts["BASIC"].difficulty} \n Notecount: ${element.charts["BASIC"].notecount}`);
                console.log(`ADVANCED chart: \n Difficulty: ${element.charts["ADVANCED"].difficulty} \n Notecount: ${element.charts["ADVANCED"].notecount}`);
                console.log(`EXPERT chart: \n Difficulty: ${element.charts["EXPERT"].difficulty} \n Notecount: ${element.charts["EXPERT"].notecount}`);
                console.log(`MASTER chart: \n Difficulty: ${element.charts["MASTER"].difficulty} \n Notecount: ${element.charts["MASTER"].notecount}`);
                console.log("=============================================================================================================================");
            }
        });
    },
    printMetaFromTitle(title) { //prints metadata from the chartset whose title matches the argument
        this.chartsets.forEach(element => {
            if (element.title == title) {
                console.log(`Title: ${element.title}`);
                console.log(`Artist: ${element.artist}`);
                console.log(`BPM: ${element.bpm}`);
                console.log(`Jacket: ${element.jacket}`);
            }
        });
    },
    printChartsFromTitle(title) { //prints data in all charts in the chartset whose title matches the argument
        this.chartsets.forEach(element => {
            if (element.title == title) {
                console.log(`Title: ${element.title}`)
                console.log(`BASIC chart: \n Difficulty: ${element.charts["BASIC"].difficulty} \n Notecount: ${element.charts["BASIC"].notecount}`);
                console.log(`ADVANCED chart: \n Difficulty: ${element.charts["ADVANCED"].difficulty} \n Notecount: ${element.charts["ADVANCED"].notecount}`);
                console.log(`EXPERT chart: \n Difficulty: ${element.charts["EXPERT"].difficulty} \n Notecount: ${element.charts["EXPERT"].notecount}`);
                console.log(`MASTER chart: \n Difficulty: ${element.charts["MASTER"].difficulty} \n Notecount: ${element.charts["MASTER"].notecount}`);
            }
        });
    },
    printChartFromTitle(title, difficulty) { //prints data in the chart whose difficulty name matches the difficulty argument in the chartset whose title matches the title argument
        this.chartsets.forEach(element => {
            if (element.title == title) {
                console.log(`Title: ${element.title}`)
                console.log(`${difficulty} chart: \n Difficulty: ${element.charts[difficulty].difficulty} \n Notecount: ${element.charts[difficulty].notecount}`);
            }
        });

    },
}