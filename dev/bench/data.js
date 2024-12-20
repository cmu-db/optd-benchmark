window.BENCHMARK_DATA = {
  "lastUpdate": 1734542744695,
  "repoUrl": "https://github.com/cmu-db/optd",
  "entries": {
    "TPC-H Planning and Execution Benchmark": [
      {
        "commit": {
          "author": {
            "email": "connor.tsui20@gmail.com",
            "name": "Connor Tsui",
            "username": "connortsui20"
          },
          "committer": {
            "email": "connor.tsui20@gmail.com",
            "name": "Connor Tsui",
            "username": "connortsui20"
          },
          "distinct": true,
          "id": "9d8ee74558550c65e1a80802329cb1f09218454f",
          "message": "add tpch benchmark workflow",
          "timestamp": "2024-12-18T11:53:00-05:00",
          "tree_id": "a8fcbe062a927e3226833cf4e63514a67df1b2ca",
          "url": "https://github.com/cmu-db/optd/commit/9d8ee74558550c65e1a80802329cb1f09218454f"
        },
        "date": 1734541181747,
        "tool": "cargo",
        "benches": [
          {
            "name": "tpch/q1/planning",
            "value": 725677,
            "range": "± 35856",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q11/planning",
            "value": 3146305,
            "range": "± 90128",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q12/planning",
            "value": 976419,
            "range": "± 10515",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q13/planning",
            "value": 522720,
            "range": "± 5338",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q14/planning",
            "value": 905263,
            "range": "± 13493",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q3/planning",
            "value": 3352732,
            "range": "± 28118",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q6/planning",
            "value": 348512,
            "range": "± 3453",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q1/execution",
            "value": 942545,
            "range": "± 35484",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q11/execution",
            "value": 268438,
            "range": "± 14047",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q12/execution",
            "value": 406774,
            "range": "± 26410",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q13/execution",
            "value": 22274460,
            "range": "± 193734",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q14/execution",
            "value": 271549,
            "range": "± 30206",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q3/execution",
            "value": 539837,
            "range": "± 31668",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q6/execution",
            "value": 171199,
            "range": "± 13335",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "connor.tsui20@gmail.com",
            "name": "Connor Tsui",
            "username": "connortsui20"
          },
          "committer": {
            "email": "connor.tsui20@gmail.com",
            "name": "Connor Tsui",
            "username": "connortsui20"
          },
          "distinct": true,
          "id": "a4af10fdcd6ed07f2663fa285fcb94acd5aa4936",
          "message": "remove debug println",
          "timestamp": "2024-12-18T12:00:53-05:00",
          "tree_id": "af52e263211c52f65fc737651151fa7897365125",
          "url": "https://github.com/cmu-db/optd/commit/a4af10fdcd6ed07f2663fa285fcb94acd5aa4936"
        },
        "date": 1734541670011,
        "tool": "cargo",
        "benches": [
          {
            "name": "tpch/q1/planning",
            "value": 723372,
            "range": "± 20451",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q10/planning",
            "value": 60832525,
            "range": "± 500800",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q11/planning",
            "value": 3141216,
            "range": "± 127501",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q12/planning",
            "value": 973309,
            "range": "± 7907",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q13/planning",
            "value": 522642,
            "range": "± 5403",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q14/planning",
            "value": 898658,
            "range": "± 6752",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q3/planning",
            "value": 3326546,
            "range": "± 210162",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q5/planning",
            "value": 63057552,
            "range": "± 719581",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q6/planning",
            "value": 344574,
            "range": "± 3201",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q7/planning",
            "value": 64166532,
            "range": "± 609121",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q8/planning",
            "value": 72870682,
            "range": "± 607630",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q9/planning",
            "value": 77641546,
            "range": "± 2243014",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q1/execution",
            "value": 848560,
            "range": "± 18006",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q10/execution",
            "value": 879127,
            "range": "± 50429",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q11/execution",
            "value": 216677,
            "range": "± 16247",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q12/execution",
            "value": 407465,
            "range": "± 23038",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q13/execution",
            "value": 21996026,
            "range": "± 928757",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q14/execution",
            "value": 234390,
            "range": "± 17925",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q3/execution",
            "value": 485846,
            "range": "± 31090",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q5/execution",
            "value": 940217,
            "range": "± 94774",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q6/execution",
            "value": 166655,
            "range": "± 16389",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q7/execution",
            "value": 14057210,
            "range": "± 1993255",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q8/execution",
            "value": 1177169,
            "range": "± 44746",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q9/execution",
            "value": 1366192,
            "range": "± 52987",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "connor.tsui20@gmail.com",
            "name": "Connor Tsui",
            "username": "connortsui20"
          },
          "committer": {
            "email": "connor.tsui20@gmail.com",
            "name": "Connor Tsui",
            "username": "connortsui20"
          },
          "distinct": true,
          "id": "a4af10fdcd6ed07f2663fa285fcb94acd5aa4936",
          "message": "remove debug println",
          "timestamp": "2024-12-18T12:00:53-05:00",
          "tree_id": "af52e263211c52f65fc737651151fa7897365125",
          "url": "https://github.com/cmu-db/optd/commit/a4af10fdcd6ed07f2663fa285fcb94acd5aa4936"
        },
        "date": 1734542743813,
        "tool": "cargo",
        "benches": [
          {
            "name": "tpch/q1/planning",
            "value": 739730,
            "range": "± 47390",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q10/planning",
            "value": 62115520,
            "range": "± 619421",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q11/planning",
            "value": 3266542,
            "range": "± 158465",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q12/planning",
            "value": 1009298,
            "range": "± 31718",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q13/planning",
            "value": 545641,
            "range": "± 19008",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q14/planning",
            "value": 924483,
            "range": "± 28114",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q3/planning",
            "value": 3443674,
            "range": "± 91995",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q5/planning",
            "value": 65064603,
            "range": "± 977471",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q6/planning",
            "value": 359840,
            "range": "± 15380",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q7/planning",
            "value": 65367359,
            "range": "± 2422046",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q8/planning",
            "value": 74272852,
            "range": "± 1043330",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q9/planning",
            "value": 78228835,
            "range": "± 1073574",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q1/execution",
            "value": 941780,
            "range": "± 37256",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q10/execution",
            "value": 906338,
            "range": "± 101241",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q11/execution",
            "value": 264326,
            "range": "± 23968",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q12/execution",
            "value": 424225,
            "range": "± 25370",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q13/execution",
            "value": 22540615,
            "range": "± 399652",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q14/execution",
            "value": 288672,
            "range": "± 26681",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q3/execution",
            "value": 556484,
            "range": "± 36786",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q5/execution",
            "value": 1038140,
            "range": "± 191929",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q6/execution",
            "value": 190490,
            "range": "± 15994",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q7/execution",
            "value": 12143570,
            "range": "± 1418672",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q8/execution",
            "value": 1222029,
            "range": "± 171909",
            "unit": "ns/iter"
          },
          {
            "name": "tpch/q9/execution",
            "value": 1365006,
            "range": "± 151210",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}