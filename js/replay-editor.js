var gamemodes = {
    osu: 0,
    taiko: 1,
    ctb: 2,
    mania: 3,
    prop: {
        0: "osu!",
        1: "taiko",
        2: "ctb",
        3: "mania"
    }
}

var menuType = {
    textbox: 0,
    dropdown: 1,
    numbers: 2,
    checkbox: 3
}
/*OLD (now lookup code) code that was suppost to build the DOM
var Menus = [
    {
        "title": "General",
        "body": [
            {
                "title": "Main",
                "body": [
                    {"title": "Mode", "type": menuType.dropdown, "values": gamemodes},
                    {"title": "Score", "type": menuType.numbers, "min": -2147483647, "max": 2147483647},
                    {"title": "Max combo", "type": menuType.numbers, "min": 0, "max": 65535},
                    {"title": "Full Combo", "type": menuType.checkbox},
                    {"title": "Passed", "type": menuType.checkbox}
                ]
            },
            {
                "title": "Hit objects",
                "body": [
                    {"title": ["Amount of 300's", "Amount of GREAT's", "Amount of Fruits", "Amount of 300's"], "type": menuType.numbers, "min": 0, "max": 65535},
                    {"title": ["Amount of 100's", "Amount of GOOD's", "Amount of Large Droplets", "Amount of 100's"], "type": menuType.numbers, "min": 0, "max": 65535},
                    {"title": ["Amount of 50's", "UNUSED", "Amount of Small Droplets", "Amount of 50's"], "type": menuType.numbers, "min": 0, "max": 65535},
                    {"title": ["Amount of Geki's", "Amount of big GREAT's", "Amount of Geki's", "Amount of MAX's"], "type": menuType.numbers, "min": 0, "max": 65535},
                    {"title": ["Amount of Katu's", "Amount of big GOOD's", "Amount of Missed Droplets", "Amount of 200's"], "type": menuType.numbers, "min": 0, "max": 65535},
                    {"title": ["Amount of Misses", "Amount of big Misses", "Amount of Missed Fruits", "Amount of Misses"], "type": menuType.numbers, "min": 0, "max": 65535}
                ]
            }
        ]
    }
]*/