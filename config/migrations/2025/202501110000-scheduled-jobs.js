const SCHEDULED_JOBS = [
  {
    "_id": "01942360c0567b829eeba4c85cc9c69e",
    "name": "Cleanup Archives",
    "creationDate": "2025-01-01T19:38:50.838549429Z",
    "taskDefinition": {
      "name": "cleanup",
      "order": 0,
      "payload": {
        "type": "cleanup",
        "value": {
          "type": "archived"
        }
      }
    },
    "definitionId": "019422ef4fd57db2a30207486a1eba55",
    "cronExpr": "0 30 3 * * * *"
  },
  {
    "_id": "01942368ea607707be91626b1240848e",
    "name": "Grimbergen",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://grimbergen-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 39 18 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91657db8a60884",
    "name": "De-pinte",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://de-pinte-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 42 13 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be916b3db8491d80",
    "name": "Deinze",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://deinze-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 15 14 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be916d20b8bffe69",
    "name": "Haaltert",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://haaltert-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 45 19 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91730334da6878",
    "name": "Bonheiden",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://bonheiden-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 24 10 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be9175fd2f5daa70",
    "name": "Anzegem",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://anzegem-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 12 8 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be917bc4d4a5046d",
    "name": "Geraardsbergen",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://geraardsbergen-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 17 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be917e7881d3f866",
    "name": "Beernem",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://beernem-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 18 9 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91824609ade974",
    "name": "Boom",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://boom-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 57 10 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be918625872cf434",
    "name": "Dentergem",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://dentergem-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 48 14 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be918bb5ce14f2f3",
    "name": "Affligem",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://affligem-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 6 7 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be918d3ae3f93446",
    "name": "Bornem",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://bornem-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 11 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91902d4b0f6a12",
    "name": "Brecht",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://brecht-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 36 12 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91942427e76d6c",
    "name": "Aarschot",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://aarschot-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 6 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be919b37d23b8fc7",
    "name": "Gooik",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://gooik-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 6 18 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be919fffd43bd8e8",
    "name": "Aartselaar",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://aartselaar-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 33 6 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91a189112add9c",
    "name": "Alveringem",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://alveringem-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 39 7 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91a4091319376f",
    "name": "Glabeek",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://glabbeek-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 33 17 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91aa631897ff6a",
    "name": "Bree",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://bree-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 9 13 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91affc66799bd9",
    "name": "Gavere",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://gavere-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 54 15 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91b2f7f2860b9b",
    "name": "Galmaarden",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://galmaarden-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 21 15 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91b5ab3d830049",
    "name": "Brakel",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://brakel-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 3 12 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91bbd59139c9af",
    "name": "Ardooie",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://ardooie-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 45 8 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91bfea30a20f6b",
    "name": "Geetbets",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://geetbets-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 27 16 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91c0cb06bcaf57",
    "name": "Hamme",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://hamme-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 18 20 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91c5645a271328",
    "name": "Bever",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://bever-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 51 9 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91cb369adb9f5d",
    "name": "Grobbendonk",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://grobbendonk-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 12 19 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91cf358b81ebc1",
    "name": "Zulte",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://zulte-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 45 19 3/4 * * *"
  },
  {
    "_id": "01942368ea607707be91d338b7599dcf",
    "name": "Lanaken-Gemeente",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://publicatie.gelinkt-notuleren.vlaanderen.be/Lanaken/Gemeente"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 12 8 4/4 * * *"
  },
  {
    "_id": "01942368ea607707be91d730e4dfa088",
    "name": "Wevelgem",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://wevelgem-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 27 16 3/4 * * *"
  },
  {
    "_id": "01942368ea607707be91d98d71e17399",
    "name": "Herenthout",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://herenthout-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 24 21 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be91dff25ee722c6",
    "name": "Oud-Herverlee",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://oud-heverlee-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 24 21 2/4 * * *"
  },
  {
    "_id": "01942368ea607707be91e38b60c63c99",
    "name": "Merchtem",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://merchtem-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 6 18 2/4 * * *"
  },
  {
    "_id": "01942368ea607707be91e471fd27af10",
    "name": "Pepingen",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://pepingen-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 6 3/4 * * *"
  },
  {
    "_id": "01942368ea607707be91e9af7f010525",
    "name": "Mesen-Gemeente",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://publicatie.gelinkt-notuleren.vlaanderen.be/Mesen/Gemeente"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 11 4/4 * * *"
  },
  {
    "_id": "01942368ea607707be91ec67df739941",
    "name": "Oostrozebeke",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://oostrozebeke-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 51 20 2/4 * * *"
  },
  {
    "_id": "01942368ea607707be91f022d8021a47",
    "name": "Nazareth",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://nazareth-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 18 20 2/4 * * *"
  },
  {
    "_id": "01942368ea607707be91f6ea842ea896",
    "name": "Kortenberg-Gemeente",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://publicatie.gelinkt-notuleren.vlaanderen.be/Kortenberg/Gemeente"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 6 7 4/4 * * *"
  },
  {
    "_id": "01942368ea607707be91fa09daf4585a",
    "name": "Tienen",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://tienen-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 15 14 3/4 * * *"
  },
  {
    "_id": "01942368ea607707be91fc67496a2e29",
    "name": "Lanaken-OCMW",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://publicatie.gelinkt-notuleren.vlaanderen.be/Lanaken/OCMW"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 45 8 4/4 * * *"
  },
  {
    "_id": "01942368ea607707be9202c60477ec50",
    "name": "Kinrooi",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://kinrooi-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 18 9 2/4 * * *"
  },
  {
    "_id": "01942368ea607707be9205acc3257b57",
    "name": "Kampenhout",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://kampenhout-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 12 8 2/4 * * *"
  },
  {
    "_id": "01942368ea607707be920a1f57682a9b",
    "name": "Limburg",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://publicatie.gelinkt-notuleren.vlaanderen.be/Limburg/Provincie"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 18 9 4/4 * * *"
  },
  {
    "_id": "01942368ea607707be920de31d1823d5",
    "name": "Hooglede",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://hooglede-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 33 6 2/4 * * *"
  },
  {
    "_id": "01942368ea607707be92106deff88ae2",
    "name": "Retie",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://retie-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 39 7 3/4 * * *"
  },
  {
    "_id": "01942368ea607707be921630ae0130b2",
    "name": "Oudenburg",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://oudenburg-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 57 21 2/4 * * *"
  },
  {
    "_id": "01942368ea607707be9218bac64b42ac",
    "name": "Bierbeek-Gemeente",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://publicatie.gelinkt-notuleren.vlaanderen.be/Bierbeek/Gemeente"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 51 20 3/4 * * *"
  },
  {
    "_id": "01942368ea607707be921d02ba1126be",
    "name": "Puurs-Sint-Amans",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://puurs-sint-amands-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 6 7 3/4 * * *"
  },
  {
    "_id": "01942368ea607707be9223d8f8456fa3",
    "name": "Herstappe-Gemeente",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://publicatie.gelinkt-notuleren.vlaanderen.be/Herstappe/Gemeente"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 6 4/4 * * *"
  },
  {
    "_id": "01942368ea607707be92255da60e6411",
    "name": "Wachtbeke",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://wachtebeke-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 21 15 3/4 * * *"
  },
  {
    "_id": "01942368ea607707be9229c349841c7d",
    "name": "Linkebeek-Gemeente",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://publicatie.gelinkt-notuleren.vlaanderen.be/Linkebeek/Gemeente"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 24 10 4/4 * * *"
  },
  {
    "_id": "01942368ea607707be922c25fdd35c7b",
    "name": "Linter",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://linter-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 21 15 2/4 * * *"
  },
  {
    "_id": "01942368ea607707be9232d851d2e249",
    "name": "Menen",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://menen-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 33 17 2/4 * * *"
  },
  {
    "_id": "01942368ea607707be9237083dc53862",
    "name": "Spiere-Helkijn",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://spiere-helkijn-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 57 10 3/4 * * *"
  },
  {
    "_id": "01942368ea607707be923ac2a4e6ec49",
    "name": "Herne",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://herne-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 22 1/4 * * *"
  },
  {
    "_id": "01942368ea607707be923e2af8e0cee1",
    "name": "Lint",
    "creationDate": "2025-01-01T19:47:45.888Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lint-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 48 14 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53b78685abc354",
    "name": "Lievegem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lievegem-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 15 14 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53ba9b01b62cd4",
    "name": "Steenokkerzeel",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://steenokkerzeel-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 3 12 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53bed21b6e1e91",
    "name": "Zemst",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://zemst-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 39 18 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53c03c990c22b8",
    "name": "Lubbeek",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lubbeek-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 27 16 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53c5fd2b57ac87",
    "name": "Mesen-OCMW",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://publicatie.gelinkt-notuleren.vlaanderen.be/Mesen/OCMW"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 3 12 4/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53c8102fbe8b94",
    "name": "Sint-Laureins",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://sint-laureins-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 51 9 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53cc58203b2d34",
    "name": "Ieper",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://ieper-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 39 7 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53d2265975427a",
    "name": "Hoegaarden",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://hoegaarden-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 6 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53d7067da1692f",
    "name": "Essen-OCMW",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://publicatie.gelinkt-notuleren.vlaanderen.be/Essen/OCMW"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 22 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53d875e4129fd7",
    "name": "Waasmunster",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://waasmunster-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 48 14 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53de0ee31670d7",
    "name": "Herstappe-OCMW",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://publicatie.gelinkt-notuleren.vlaanderen.be/Herstappe/OCMW"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 33 6 4/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53e13001ad000f",
    "name": "Huldenberg",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://huldenberg-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 6 7 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53e43072d0da7a",
    "name": "Vlaams-Brabant",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://publicatie.gelinkt-notuleren.vlaanderen.be/Vlaams-Brabant/Provincie"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 36 12 4/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53eb7ae073f1c8",
    "name": "Bierbeek-OCMW",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://publicatie.gelinkt-notuleren.vlaanderen.be/Bierbeek/OCMW"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 24 21 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53efe5026240d3",
    "name": "Koksijde",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://koksijde-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 24 10 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53f0846d2d8990",
    "name": "Kortenberg-OCMW",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://publicatie.gelinkt-notuleren.vlaanderen.be/Kortenberg/OCMW"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 39 7 4/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53f45df2d9fbd4",
    "name": "Zandhoven",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://zandhoven-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 33 17 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53fa15ce2984dc",
    "name": "Kuurne",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://kuurne-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 36 12 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b53fe8468f61bbd",
    "name": "Lennik",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lennik-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 9 13 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b540387f855db54",
    "name": "Wingene",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://wingene-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 17 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b5407f7cc6bec52",
    "name": "Zaventem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://zaventem-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 6 18 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b540a0caa2e8ab7",
    "name": "Londerzeel",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://londerzeel-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 54 15 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b540ce25b92e958",
    "name": "Kontich",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://kontich-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 57 10 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b5412b7789a6c56",
    "name": "Overijse",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://overijse-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 22 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b5414e50c54e792",
    "name": "Moorslede",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://moorslede-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 45 19 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b541a235f59bf39",
    "name": "Sint-Genesius-rode",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://sint-genesius-rode-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 18 9 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b541e5e0acd0255",
    "name": "Tielt",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://tielt-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 42 13 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b54234bc1957d06",
    "name": "Ruiselede",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://ruiselede-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 45 8 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b54266558776389",
    "name": "Ternat",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://ternat-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 36 12 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b542a1f87cdc47f",
    "name": "Lichtervelde",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lichtervelde-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 42 13 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b542cb04b4b7034",
    "name": "Sint-Martens-Latem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://sint-martens-latem-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 24 10 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b54331652fdcb9e",
    "name": "Koekelare",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://koekelare-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 51 9 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b54346fad50e7b3",
    "name": "Rijkevorsel",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://rijkevorsel-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 12 8 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b5439c393bbe940",
    "name": "Machelen",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://machelen-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 17 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b543f1df9f3e204",
    "name": "Moerbeke",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://moerbeke-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 12 19 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b54418db0970c16",
    "name": "Zoutleeuw",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://zoutleeuw-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 12 19 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b5444392cf24c10",
    "name": "Kappele-op-den-bos",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://kapelle-op-den-bos-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 45 8 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b54491664f70453",
    "name": "Tervuren",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://tervuren-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 9 13 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b544ef121c11d45",
    "name": "Essen-Gemeente",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://publicatie.gelinkt-notuleren.vlaanderen.be/Essen/Gemeente"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 57 21 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b54500d890c5726",
    "name": "Merksplas",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://merksplas-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 39 18 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b5455b6a31b08be",
    "name": "Herent",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://herent-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 51 20 1/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b545b9928fbb487",
    "name": "Zwalm",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://zwalm-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 18 20 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b545d1988f97034",
    "name": "Kortemark",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://kortemark-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 11 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b546051709a856e",
    "name": "Linkebeek-OCMW",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://publicatie.gelinkt-notuleren.vlaanderen.be/Linkebeek/OCMW"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 57 10 4/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b546526aa806824",
    "name": "Kruisem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://kruisem-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 3 12 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b546a920129b593",
    "name": "Wemmel",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://wemmel-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 54 15 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b546c068870f851",
    "name": "Herk-De-Stad",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://herk-de-stad-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 57 21 1/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b54728167ab84bd",
    "name": "Pittem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://pittem-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 33 6 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b5475cd619c100a",
    "name": "Staden",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://staden-echo.cipalschaubroeck.be/raadpleegomgeving/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 11 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b54784747b061b4",
    "name": "Meerhout",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://meerhout.meetingburger.net/?AlleVergaderingen=True/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 0 3/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b547f2633ecdfe3",
    "name": "Gent",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://ebesluitvorming.gent.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 6 5/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b5481ca134c6cdd",
    "name": "Maldegem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Maldegem.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 1 3/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54846ecb23b7ff",
    "name": "Mol",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Mol.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 2 3/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b548ba0c939b177",
    "name": "Olen",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://olen.meetingburger.net/?AlleVergaderingen=True/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 3 3/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b548e0e48a39eb7",
    "name": "Hoeilaart",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://hoeilaart.meetingburger.net/?AlleVergaderingen=True/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 4 2/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54905713ee4d8f",
    "name": "Hoeselt",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://hoeselt.meetingburger.net/?AlleVergaderingen=True/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 5 3/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b5494025f22b959",
    "name": "Heusden-Zolder",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://heusden-zolder.meetingburger.net/?AlleVergaderingen=True/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 6 2/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54998be13a4995",
    "name": "Dorgenbos",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Drogenbos.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 7 2/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b549d1cd43c194d",
    "name": "Brugge",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://besluitvorming.brugge.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 17 1/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54a06a30d268e5",
    "name": "Wommelgem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Wommelgem.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 8 4/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54a5d8c9a98d91",
    "name": "Alken",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Alken.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 9 2/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54ab75815f7955",
    "name": "Herselt",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://herselt.meetingburger.net/?AlleVergaderingen=True/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 10 2/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54ae0c9587c900",
    "name": "Holsbeek",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Holsbeek.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 11 3/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54b3146069ceec",
    "name": "Kasterlee",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Kasterlee.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 12 3/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54b5a1504a98f6",
    "name": "leuven",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://besluitvorming.leuven.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 9 13 2/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54b9f51cff4559",
    "name": "Schoten",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Schoten.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 13 4/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54bddeb4bbb2ae",
    "name": "Deerlijk",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Deerlijk.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 14 2/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54c24e846b9b9a",
    "name": "Roeselare",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://besluitvorming.roeselare.be/suite-consult/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 11 2/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54c5700e3e24e6",
    "name": "Keerbergen",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://keerbergen.meetingburger.net/?AlleVergaderingen=True/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 15 3/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54cbb9da8b0ad3",
    "name": "bertem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://bertem.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 16 4/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54cf794344b59f",
    "name": "Boutersem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://boutersem.meetingburger.net/?AlleVergaderingen=True/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 17 2/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54d3c7e0c6bcfc",
    "name": "Hove",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://hove.meetingburger.net/?AlleVergaderingen=True/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 18 3/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54d55ca4640bdd",
    "name": "Antwerpen",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://ebesluit.antwerpen.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 6 1/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54da5b927d08a6",
    "name": "Meise",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Meise.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 19 3/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54dc1390f76b67",
    "name": "Brasschaat",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Brasschaat.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 20 2/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54e1083741ff95",
    "name": "Hoogstraten",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Hoogstraten.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 21 3/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54e48ac18b52e3",
    "name": "Wemmel",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://wemmel.meetingburger.net/?AlleVergaderingen=True/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 22 4/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54e9925f3c9cb9",
    "name": "Tielt-Winge",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://tielt-winge.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 23 4/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b54eda8f98f53b8",
    "name": "Kapellen",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://kapellen.meetingburger.net/?AlleVergaderingen=True/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 0 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b54f1c4d3b7108b",
    "name": "Hemiksem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Hemiksem.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 1 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b54f4fe166fdc26",
    "name": "Roosdaal",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://roosdaal.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 2 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b54fa2a96ec4199",
    "name": "Riemst",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Riemst.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 2 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b54fc4840b84411",
    "name": "Bekkevoort",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Bekkevoort.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 3 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b5501f09a6193aa",
    "name": "Wezembeek-Oppem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://wezembeek-oppem.meetingburger.net/?AlleVergaderingen=True/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 4 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b5506b3aa295ce6",
    "name": "Ranst",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Ranst.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 5 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b550a86908813c1",
    "name": "Schelle",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://schelle.meetingburger.net/?AlleVergaderingen=True/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 6 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b550ef01ca67741",
    "name": "Lier",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Lier.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 7 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b5513cf175ef623",
    "name": "Tremelo",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Tremelo.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 8 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b5517b1b2ba0179",
    "name": "Kraainem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://kraainem.meetingburger.net/?AlleVergaderingen=True/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 9 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b551ac4bff5d758",
    "name": "Wellen",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Wellen.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 10 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b551fbc784f573c",
    "name": "Asse",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Asse.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 11 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b5520a2b38dd382",
    "name": "Hulshout",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Hulshout.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 12 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b5525cb04ab2c4d",
    "name": "Boortmeerbeek",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://boortmeerbeek.meetingburger.net/?AlleVergaderingen=True/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 13 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b552a1b4987c1e0",
    "name": "Begijnendijk",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Begijnendijk.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 14 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b552ffe017d6224",
    "name": "Boechout",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Boechout.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 15 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b5530a147529dc3",
    "name": "Schilde",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Schilde.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 16 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b553572820be9f6",
    "name": "Rotselaar",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Rotselaar.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 17 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b553a5dd88ba3d1",
    "name": "Houthalen_helchteren",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Houthalen-Helchteren.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 18 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b553c870e7af28c",
    "name": "Beersel",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Beersel.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 19 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b5540b623d7a7ab",
    "name": "Malle",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "http://Malle.meetingburger.net/?AlleVergaderingen=True"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 20 1/6 * * *"
  },
  {
    "_id": "01942368ea6175e39b5546c3bfd54d96",
    "name": "Hasselt",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://ebesluit.hasselt.be/suite-consult/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 27 9 2/5 * * *"
  },
  {
    "_id": "01942368ea6175e39b554bda08484d7d",
    "name": "Berlare",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.berlare.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 6 1/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b554ca1ab145cf4",
    "name": "horebeke",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.horebeke.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 20 19 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b5552854d4fb183",
    "name": "Niel",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.niel.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 18 1/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b5557349de97fcc",
    "name": "nieuwpoort",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.nieuwpoort.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 40 17 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55594a4161dfaa",
    "name": "heuvelland",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.heuvelland.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 18 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b555c4269b38a80",
    "name": "lendelede",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.lendelede.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 13 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b5560202c67e8fd",
    "name": "kluisbergen",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.kluisbergen.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 6 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b556600b1e2d66c",
    "name": "oosterzele",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.oosterzele.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 20 19 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b556abc24959fbc",
    "name": "Ronse",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.ronse.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 20 19 1/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b556fed01e5273b",
    "name": "west-vlaanderen",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.west-vlaanderen.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 10 10 4/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55735d3cfe1cb3",
    "name": "Zele",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.zele.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 50 6 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b5576ae7c238900",
    "name": "zelzate",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.zelzate.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 13 4/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b5578d1780bf948",
    "name": "depanne",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.depanne.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 10 15 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b557d50337e7e7a",
    "name": "lebbeke",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.lebbeke.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 11 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55833fff837005",
    "name": "Veurne",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.veurne.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 50 21 1/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55874dd83be957",
    "name": "lede",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.lede.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 50 11 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b558ae9a2f089c6",
    "name": "laarne",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.laarne.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 20 9 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b558c84233b9f69",
    "name": "Zwevegem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.zwevegem.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 10 10 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b559094f83992de",
    "name": "kruibeke",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.kruibeke.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 8 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b5596cbb57621f1",
    "name": "Zottegem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.zottegem.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 8 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b559b1ba3e59c71",
    "name": "Sint-Lievens-Houtem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.sint-lievens-houtem.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 10 20 1/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b559c6a002703d7",
    "name": "Blankenberge",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.blankenberge.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 50 6 1/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55a121320bbe0b",
    "name": "landen",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.landen.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 10 10 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55a6e3c52906a0",
    "name": "dendermonde",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.dendermonde.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 20 14 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55aaf951939d23",
    "name": "merelbeke",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.merelbeke.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 10 15 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55ad0effb299da",
    "name": "Lochristi",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.lochristi.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 10 15 1/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55b30d266ad034",
    "name": "wichelen",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.wichelen.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 50 11 4/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55b78459986550",
    "name": "jabbeke",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.jabbeke.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 50 21 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55b9cb8a3c5367",
    "name": "wetteren",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.wetteren.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 11 4/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55be2e17b03ce7",
    "name": "vleteren",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.vleteren.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 40 7 4/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55c2dab8e153ad",
    "name": "stekene",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.stekene.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 6 4/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55c4c48625dca5",
    "name": "Mechelen",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.mechelen.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 50 16 1/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55c928d199a5c8",
    "name": "scherpenheuvel-zichem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.scherpenheuvel-zichem.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 50 21 3/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55ccc82244cc33",
    "name": "Wielsbeke",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.wielsbeke.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 6 2/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55d37c2bb09791",
    "name": "Ichtegem",
    "creationDate": "2025-01-01T19:47:45.889Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.ichtegem.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 40 12 1/4 * * *"
  },
  {
    "_id": "01942368ea6175e39b55d4933ffb4d82",
    "name": "Ingelmunster",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.ingelmunster.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 13 1/4 * * *"
  },
  {
    "_id": "01942368ea627378afe69c29af0b7138",
    "name": "avelgem",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.avelgem.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 50 11 2/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6a15f69aa25a2",
    "name": "houthulst",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.houthulst.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 10 20 2/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6a5d228a99d14",
    "name": "Erpe-Mere",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.erpe-mere.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 11 1/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6aa6acd6f15be",
    "name": "sint-gillis-waas",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.sint-gillis-waas.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 40 22 3/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6ac87af379077",
    "name": "Lo-reninge",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.lo-reninge.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 20 14 1/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6b22b7784a6e0",
    "name": "buggenhout",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.buggenhout.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 40 12 2/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6b413ec556ad2",
    "name": "Maarkedal",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.maarkedal.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 16 1/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6baf520f48dc6",
    "name": "Voeren",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.voeren.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 40 22 1/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6bc15d2e1e348",
    "name": "harelbeke",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.harelbeke.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 50 16 2/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6c28b6e7ed5ac",
    "name": "wervik",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.wervik.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 20 9 4/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6c4e201d933f6",
    "name": "Melle",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.melle.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 40 17 1/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6caedf63a338b",
    "name": "Gistel",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.gistel.be/LBLODWeb/Home/Overzicht"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 50 11 1/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6cef7e06e4242",
    "name": "De-Haan",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.dehaan.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 8 1/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6d1228de04cc8",
    "name": "oudenaarde",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.oudenaarde.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 10 20 3/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6d741044f87fe",
    "name": "Diksmuide",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.diksmuide.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 10 10 1/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6dbb4cd831175",
    "name": "izegem",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.izegem.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 21 2/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6df062ad74037",
    "name": "torhout",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.torhout.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 50 6 4/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6e380cbebaebd",
    "name": "knokke-heist",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.knokke-heist.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 50 6 3/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6e531dbcc39a6",
    "name": "meulebeke",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.meulebeke.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 16 3/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6ebb0d2506c36",
    "name": "Zuienkerke",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.zuienkerke.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 20 9 2/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6ecc50114bedd",
    "name": "Denderleeuw",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.denderleeuw.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 20 9 1/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6f2b74f9021dc",
    "name": "poperinge",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.poperinge.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 21 3/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6f779c908d2a4",
    "name": "kaprijke",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.kaprijke.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 40 22 2/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6f8e551c439c8",
    "name": "ledegem",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.ledegem.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 40 12 3/4 * * *"
  },
  {
    "_id": "01942368ea627378afe6fe935bec4b15",
    "name": "ninove",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.ninove.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 18 3/4 * * *"
  },
  {
    "_id": "01942368ea627378afe701010e155c20",
    "name": "damme",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.damme.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 13 2/4 * * *"
  },
  {
    "_id": "01942368ea627378afe70665e0da185b",
    "name": "evergem",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.evergem.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 16 2/4 * * *"
  },
  {
    "_id": "01942368ea627378afe709604b3d3df3",
    "name": "waregem",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.waregem.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 8 4/4 * * *"
  },
  {
    "_id": "01942368ea627378afe70cf92ba5cb4b",
    "name": "kortenaken",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.kortenaken.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 40 7 3/4 * * *"
  },
  {
    "_id": "01942368ea627378afe711317084f8ff",
    "name": "lierde",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.lierde.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 20 14 3/4 * * *"
  },
  {
    "_id": "01942368ea627378afe71446c015b919",
    "name": "Bredene",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.bredene.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 40 7 1/4 * * *"
  },
  {
    "_id": "01942368ea627378afe71a0c3856866f",
    "name": "Temse",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.temse.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 21 1/4 * * *"
  },
  {
    "_id": "01942368ea627378afe71d765634e751",
    "name": "wortegem-petegem",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.wortegem-petegem.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 40 12 4/4 * * *"
  },
  {
    "_id": "01942368ea627378afe720486831578e",
    "name": "assenede",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.assenede.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 11 2/4 * * *"
  },
  {
    "_id": "01942368ea627378afe726ac4d6ceaa4",
    "name": "Zonnebeke",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.zonnebeke.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 40 7 2/4 * * *"
  },
  {
    "_id": "01942368ea627378afe728fcd35aacdd",
    "name": "herzele",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.herzele.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 40 17 2/4 * * *"
  },
  {
    "_id": "01942368ea627378afe72d6061febdf4",
    "name": "middelkerke",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.middelkerke.be/LBLODWeb/Home/Overzicht/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 50 16 3/4 * * *"
  },
  {
    "_id": "01942368ea627378afe731108760ab80",
    "name": "izegem (working)",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://lblod.izegem.be/LBLODWeb/Home/Overzicht/6a56d8c050b6c2a76912c5f6ec3859b939de6d990815f35403e5be41a7703a44"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 38 12 * * * *"
  },
  {
    "_id": "01942368ea627378afe7347c9768ae05",
    "name": "destelbergen (fixed)",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://destelbergen.powerappsportals.com/bestuur-en-beleid/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 42 12 * * * *"
  },
  {
    "_id": "01942368ea627378afe73bcbc4d4a725",
    "name": "Diepenbeek",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-diepenbeek.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 9 13 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe73d9b1e3cb33a",
    "name": "Berlaar",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-berlaar.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 24 10 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe741f2749686f9",
    "name": "Beerse",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-beerse.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 18 9 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe74616ee149d64",
    "name": "Edegem",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-edegem.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 48 14 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe74b322aafe001",
    "name": "Dilsen-Stokkem",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-dilsen-stokkem.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 15 14 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe74ce3205a2cc9",
    "name": "Bocholt",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-bocholt.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 11 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe75306ec117032",
    "name": "Arendonk",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-arendonk.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 39 7 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe75426413c86fc",
    "name": "As",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-as.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 12 8 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe75960e57c63a3",
    "name": "Aalst",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-aalst.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 6 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe75d18d2556e50",
    "name": "Beveren",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-beveren.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 57 10 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe760e8175cd87b",
    "name": "Genk",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-genk.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 54 15 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe766e5c5cf9aee",
    "name": "Aalter",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-aalter.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 6 7 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe76959b3cfa60f",
    "name": "Geel",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-geel.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 21 15 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe76e7440821f00",
    "name": "Borsbeek",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-borsbeek.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 36 12 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe771ce99c9befa",
    "name": "Diest",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-diest.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 42 13 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe77419a63b8095",
    "name": "Beringen",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-beringen.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 51 9 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe77ac5e5597afe",
    "name": "Borgloon",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-borgloon.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 3 12 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe77c80cd04792d",
    "name": "Baarle-Hertog",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-baarle-hertog.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 45 8 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe780f3fb8f1815",
    "name": "Lommel",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-lommel.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 39 7 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe785ec70794300",
    "name": "Maaseik",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-maaseik.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 45 8 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7895071c161b1",
    "name": "Provincie-Antwerpen",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://www.provincieantwerpen.be/provinciebestuur/politiek-bestuur"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 24 10 3/3 * * *"
  },
  {
    "_id": "01942368ea627378afe78cd0f03b8d66",
    "name": "Oost-Vlaanderen",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-oost-vlaanderen.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 11 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe790d48ae7e9c4",
    "name": "Laakdal",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://tobibus-laakdal.azurewebsites.net/LBLOD"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 12 8 3/3 * * *"
  },
  {
    "_id": "01942368ea627378afe79688feb12fad",
    "name": "Turnhout",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-turnhout.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 6 18 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe79b1384202600",
    "name": "Maasmechelen",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-maasmechelen.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 18 9 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe79f5347bb2aaf",
    "name": "Eeklo",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://tobibus-eeklo.azurewebsites.net/LBLOD"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 39 7 3/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7a04fa27d4b1d",
    "name": "Lokeren",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-lokeren.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 6 7 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7a5103b723b1a",
    "name": "Sint-Niklaas",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-sint-niklaas.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 21 15 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7abc82a284044",
    "name": "Pelt",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://tobibus-pelt.azurewebsites.net/LBLOD"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 18 9 3/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7acfbe3c72689",
    "name": "Halen",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-halen.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 33 17 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7b32d0ded64c6",
    "name": "Zutendaal",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-zutendaal.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 22 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7b695fa4f42b6",
    "name": "Nieuwerkerken",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-nieuwerkerken.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 24 10 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7b8b921d1083a",
    "name": "Peer",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-peer.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 42 13 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7bf8d47ff56ff",
    "name": "Zwijndrecht",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-zwijndrecht.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 6 3/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7c0cf151e43d3",
    "name": "Zonhoven",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-zonhoven.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 57 21 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7c67601e32d33",
    "name": "Bilzen",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://tobibus-bilzen.azurewebsites.net/LBLOD"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 6 7 3/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7ca917819fe73",
    "name": "Tessenderlo",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-tessenderlo.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 17 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7cdbe39a2b622",
    "name": "Ravels",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-ravels.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 15 14 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7d20774800ca4",
    "name": "Wijnegem",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-wijnegem.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 51 20 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7d72c39b43bbd",
    "name": "Westerlo",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-westerlo.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 18 20 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7db1ff30c7f92",
    "name": "Heist-op-den-Berg",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-heist-op-den-berg.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 51 20 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7dcf386b7dfae",
    "name": "Leopoldsburg",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-leopoldsburg.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 33 6 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7e34e037539e1",
    "name": "Liedekerke",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://liedekerke.powerappsportals.com/bestuur-en-beleid/"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 11 3/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7e54c716db0b8",
    "name": "Stabroek",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://tobibus-stabroek.azurewebsites.net/LBLOD"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 51 9 3/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7e8cf3a867348",
    "name": "Vosselaar",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-vosselaar.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 45 19 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7ec337f51836c",
    "name": "Haacht",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-haacht.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 17 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7f3250cd39874",
    "name": "Wuustzezel",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-wuustwezel.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 24 21 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7f7d2067dd4fb",
    "name": "Tongeren",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-tongeren.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 33 17 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7f81b26eb0997",
    "name": "Langemark-Poelkapelle",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-langemark-poelkapelle.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 0 6 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe7fe9d924407a5",
    "name": "Heers",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-heers.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 18 20 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe803a0c7d1d5bf",
    "name": "Halle",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-halle.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 6 18 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe80548404c0fbc",
    "name": "Hamont-Achel",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-hamont-achel.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 12 19 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe80a1ec9914d0d",
    "name": "Mortsel",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-mortsel.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 51 9 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe80ed5eb34e4d6",
    "name": "Gingelom",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-gingelom.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 27 16 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe81150694dd0ba",
    "name": "Opwijk",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-opwijk.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 36 12 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe8162a85241a4e",
    "name": "Balen",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://edocs.balen.be/suite-consult/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 57 10 3/3 * * *"
  },
  {
    "_id": "01942368ea627378afe81965430fc03b",
    "name": "Kortessem",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-kortessem.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 57 21 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe81f88e32759f1",
    "name": "Outsbergen",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://tobibus-oudsbergen.azurewebsites.net/LBLOD"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 45 8 3/3 * * *"
  },
  {
    "_id": "01942368ea627378afe8238cc2a2ec92",
    "name": "Nijlen",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-nijlen.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 57 10 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe824893e822236",
    "name": "Kortrijk",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-kortrijk.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 30 22 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe829adc5d6a46d",
    "name": "Vilvoorde",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-vilvoorde.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 39 18 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe82ff397641f54",
    "name": "Sint-Truiden",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-sint-truiden.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 27 16 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe8331084900d50",
    "name": "sint-katelijne-waver",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-skw.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 33 6 3/3 * * *"
  },
  {
    "_id": "01942368ea627378afe8354717525e26",
    "name": "Oostende",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-oostende.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 3 12 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe83b4e202c1c83",
    "name": "Rumst",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-rumst.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 48 14 2/3 * * *"
  },
  {
    "_id": "01942368ea627378afe83ef78361bd00",
    "name": "Hechtel-eksel",
    "creationDate": "2025-01-01T19:47:45.890Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-hechtel-eksel.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 45 19 1/3 * * *"
  },
  {
    "_id": "01942368ea627378afe842d1f4418df1",
    "name": "Ham",
    "creationDate": "2025-01-01T19:47:45.891Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-ham.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 39 18 1/3 * * *"
  },
  {
    "_id": "01942368ea63773eb4cc40cf999aafd9",
    "name": "Vorselaar",
    "creationDate": "2025-01-01T19:47:45.891Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-vorselaar.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 12 19 2/3 * * *"
  },
  {
    "_id": "01942368ea63773eb4cc47a84898f476",
    "name": "Herentals",
    "creationDate": "2025-01-01T19:47:45.891Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-herentals.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 24 21 1/3 * * *"
  },
  {
    "_id": "01942368ea63773eb4cc4b40348a5e5b",
    "name": "Lummen",
    "creationDate": "2025-01-01T19:47:45.891Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-lummen.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 12 8 2/3 * * *"
  },
  {
    "_id": "01942368ea63773eb4cc4dd04a6be408",
    "name": "Sint-Pieters-Leeuw",
    "creationDate": "2025-01-01T19:47:45.891Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-sint-pieters-leeuw.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 54 15 2/3 * * *"
  },
  {
    "_id": "01942368ea63773eb4cc50a4c2e39f27",
    "name": "Oud-Turnhout",
    "creationDate": "2025-01-01T19:47:45.891Z",
    "taskDefinition": {
      "name": "collect",
      "order": 0,
      "payload": {
        "type": "scrapeUrl",
        "value": "https://raadpleeg-oud-turnhout.onlinesmartcities.be/zittingen/lijst"
      }
    },
    "definitionId": "0193e822c0377b8187a6d151dbbb4216",
    "cronExpr": "0 9 13 2/3 * * *"
  }
];


const execute = async (db, _) => {
  const scheduledJobCollection = await db.collection('scheduledJobs');
  await scheduledJobCollection.insertMany(SCHEDULED_JOBS);
}

const rollback = async (_db, _context = {}) => {
};

module.exports = {
  targetDatabases: ['public'],
  description: 'Add scheduled jobs',
  rollback,
  execute,
};
