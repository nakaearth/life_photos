

This repository
Explore
Gist
Blog
Help
nakaearth
1  Watch
Star 0Fork 0PUBLIC suzuki-kei / rails4_action_controller_live_with_google_maps_sample
 branch: master rails4_action_controller_live_with_google_maps_sample / app / assets / javascripts / map.js 
 suzuki-kei a month ago 変数の null クリア忘れを修正.
1 contributor
 file 97 lines (80 sloc) 2.924 kb  Open EditRawBlameHistory Delete
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96

function Map(mapId, options) {
    this.mapId = mapId;
    this.options = $.extend({}, options, this.DEFAULT_OPTIONS);
    this.markerMap = {};
    this.eventSource = null;
    this.map = this.createMap(this.mapId, this.options);
}

Map.prototype = {
    DEFAULT_OPTIONS: {
        zoom: 6,
        latitude: 34.649388888,
        longitude: 135.001472222,
        requestUrl: "/markers",
        mapTypeId: google.maps.MapTypeId.ROADMAP
    },

    createMap: function(mapId, options) {
        var map = new google.maps.Map(document.getElementById(mapId), {
            zoom: options.zoom,
            center: new google.maps.LatLng(options.latitude, options.longitude),
            mapTypeId: this.options.mapTypeId
        });

        var self = this;
        var mapChanged = function(event) { self.mapChanged(event); }
        google.maps.event.addListener(map, "dragend", mapChanged);
        google.maps.event.addListener(map, "zoom_changed", mapChanged);
        google.maps.event.addListenerOnce(map, "bounds_changed", mapChanged);

        return map;
    },

    mapChanged: function(event) {
        this.cancelRequest();
        this.removeOutsideMarkers();
        this.requestMarkers();
    },

    cancelRequest: function() {
        if(this.eventSource) {
            this.eventSource.close();
            this.eventSource = null;
        }
    },

    removeOutsideMarkers: function() {
        for(var key in this.markerMap) {
            if(!this.isInside(this.markerMap[key])) {
                this.markerMap[key].setMap(null);
                delete this.markerMap[key];
            }
        }
    },

    isInside: function(marker) {
        return this.map.getBounds().contains(marker.getPosition());
    },

    requestMarkers: function() {
        var self = this;
        this.eventSource = new EventSource(this.createRequestUrl());

        this.eventSource.addEventListener("marker", function(event) {
            self.addMarker(JSON.parse(event.data));
        });

        this.eventSource.addEventListener("done", function(event) {
            self.eventSource.close();
            self.eventSource = null;
        });
    },

    createRequestUrl: function() {
        var bounds = this.map.getBounds();
        var url = this.options.requestUrl;
        url += "?north=" + bounds.getNorthEast().lat();
        url += "&east=" + bounds.getNorthEast().lng();
        url += "&south=" + bounds.getSouthWest().lat();
        url += "&west=" + bounds.getSouthWest().lng();
        url += "&excludes=" + Object.keys(this.markerMap);
        return url;
    },

    addMarker: function(data) {
        if(this.markerMap[data.id]) {
            return;
        }

        var position = new google.maps.LatLng(data.latitude, data.longitude);
        var marker = new google.maps.Marker({map: this.map, position: position, title: data.name});
        this.markerMap[data.id] = marker;
    }
}

