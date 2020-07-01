var APP_DATA = {
  "scenes": [
    {
      "id": "0-gebudeansicht",
      "name": "Gebäudeansicht",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.0108956415171928,
        "pitch": 0.00991536612246513,
        "fov": 1.5147828957253604
      },
      "linkHotspots": [
        {
          "yaw": -0.032085108572243115,
          "pitch": -0.058979132368538245,
          "rotation": 0,
          "target": "1-brcke"
        },
        {
          "yaw": -0.7762255227721333,
          "pitch": -0.11257753990276598,
          "rotation": 0,
          "target": "2-atrium"
        },
        {
          "yaw": -0.33060861075239956,
          "pitch": -0.28711387464399607,
          "rotation": 0,
          "target": "3-terasse"
        },
        {
          "yaw": -0.9267430596247657,
          "pitch": -0.1540671702529579,
          "rotation": 0,
          "target": "4-broraum"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5143048800108918,
          "pitch": -0.5572001591458076,
          "title": "Green Route -&nbsp;<div>Markus Schiemann</div>",
          "text": "Die zwei Hauptfunktionen des Gebäudes von Büro- und Gardening-Bereichen wachsen als sich gegenseitig umwickelnde Stränge ineinander. Die geometrische Form dieser Symbiose wird durch parametrische Werkzeuge so gebildet, dass eine große Vielfalt an spannenden Raumeindrücken entsteht."
        }
      ]
    },
    {
      "id": "1-brcke",
      "name": "Brücke",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.08645524527562642,
        "pitch": 0.09238964633292923,
        "fov": 1.5147828957253604
      },
      "linkHotspots": [
        {
          "yaw": 0.6388211300167868,
          "pitch": -0.026897298469318542,
          "rotation": 0,
          "target": "2-atrium"
        },
        {
          "yaw": -1.3249002767603528,
          "pitch": 0.02321912573614071,
          "rotation": 0,
          "target": "0-gebudeansicht"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-atrium",
      "name": "Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.5680586678032924,
        "pitch": -1.1351058425321199,
        "fov": 1.5147828957253604
      },
      "linkHotspots": [
        {
          "yaw": 2.1333891173097523,
          "pitch": -0.9556885166184692,
          "rotation": 1.5707963267948966,
          "target": "4-broraum"
        },
        {
          "yaw": 0.006419526558641309,
          "pitch": 0.016520391896692743,
          "rotation": 0,
          "target": "1-brcke"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-terasse",
      "name": "Terasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5147828957253604
      },
      "linkHotspots": [
        {
          "yaw": 0.7472609540381914,
          "pitch": 0.14586780605016259,
          "rotation": 9.42477796076938,
          "target": "0-gebudeansicht"
        },
        {
          "yaw": 2.398441665512748,
          "pitch": 0.0330884739954751,
          "rotation": 3.141592653589793,
          "target": "4-broraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-broraum",
      "name": "Büroraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.1371860228187991,
        "pitch": -0.00561724188767343,
        "fov": 1.5147828957253604
      },
      "linkHotspots": [
        {
          "yaw": -0.31956966735169523,
          "pitch": 0.013384063265434065,
          "rotation": 0,
          "target": "3-terasse"
        },
        {
          "yaw": 2.116777146917741,
          "pitch": -0.042202707531421524,
          "rotation": 3.141592653589793,
          "target": "2-atrium"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Green Route - Markus Schiemann",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
