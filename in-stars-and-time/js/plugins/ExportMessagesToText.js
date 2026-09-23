/*:
 * @plugindesc Exports all of the game's messages into a single txt file.
 * @author Mogwai "Jake Jilg"
 *
 * @help
 *   Mogwai "Jake Jilg" Exporter
 * ----------------------------------------------------------------------------
 * Export Messages to Text version 0.3
 * create a folder on your main hard drive and use the game test, a popup will appear.
 * Enter your folder and the file there.
 * Example: "Textlog/textlog.txt"
 * ----------------------------------------------------------------------------
 * 
 */
var tempTextBody = "";
var mapname = [];
window.addEventListener("load", function(e) {
    var messages = {};
    var getJSON = function(file, callback, done) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", file, false);
        xmlHttp.send(null);
        if (xmlHttp.responseText.length > 0)
            return callback(xmlHttp.responseText);
        else
            done();
    }
    if (confirm("Would you like to export all of the game messages to a txt file?")) {
        var txtname = prompt("What would you like to name the txt file?", "messages");
        // collect map JSONs
        var x = 0;
        getJSON("data/MapInfos.json", function(text) {
            var json = JSON.parse(text);
            for (var i = 0; i < json.length; i++) {
                if (json[i] === null) continue;
                window.mapname.push(json[i]["name"]);
            }
        }, function() {
            alert("failed to read map infos");
        });
        var getMap = function() {
            x++;
            var num = x < 10 ? "00" + x : x < 100 ? "0" + x : "" + x;
            getJSON("data/Map" + num + ".json", function(text) {
                // parse to the messages
                if (typeof text !== "undefined") {
                    window.tempTextBody += '"' + window.mapname[x - 1] + '"' + "\r\n\r\n";
                    var json = JSON.parse(text);
                    for (var i = 0; i < json.events.length; i++) {
                        if (json.events[i] === null) continue;
                        var event = json.events[i];
                        if (typeof event.name === "undefined")
                            var name = "noName";
                        else
                            var name = event.name;
                        var message = "";
                        for (var ii = 0; ii < event.pages.length; ii++) {
                            if (event.pages[ii] === null) continue;
                            if (typeof event.pages[ii].list === "undefined") continue;
                            var page = event.pages[ii];
                            for (var iii = 0; iii < page.list.length; iii++) {
                                if (typeof page.list[iii] === "undefined")
                                    continue;
                                if (typeof page.list[iii].parameters === "undefined" ||
                                    typeof page.list[iii].parameters !== typeof [] ||
                                    typeof page.list[iii].parameters === typeof [] &&
                                    page.list[iii].parameters.length === 0 ||
                                    page.list[iii].parameters[0].length === 0 ||
                                    typeof page.list[iii].parameters === typeof [] &&
                                    typeof page.list[iii].parameters[0] !== typeof "")
                                    continue;
                                var command = page.list[iii];
                                message += "	" + command.parameters[0] + "\r\n";
                            }
                            message += "\r\n";
                        }
                        window.tempTextBody += name + "\r\n" + message;
                        if (i + 1 < json.events.length)
                            window.tempTextBody += "- - - - - - - - - - - - - - - - - - - - - - -\r\n";
                    }
                }
                if (x < window.mapname.length) { // repeat fetching
                    window.tempTextBody += "______________________________________________\r\n\r\n";
                    getMap(); // recursive
                } else {
                    // no more maps
                    var fs = require('fs');
                    var path = require('path');
                    var fname = document.location.pathname.match(/^\/\w:\//)!==null? // windows path
                        unescape(document.location.pathname.replace(/^\/|index\.html$/g, '')) + txtname + ".txt"
                      :
                      path.join(
                        unescape(document.location.pathname.replace(/index\.html$/, '')),
                        txtname + ".txt"); // mac path
                    fs.writeFile(
                        fname,
                        window.tempTextBody,
                        function(err) {
                            if (err) {
                                alert(err);
                                return;
                            }
                            alert("Done!\r\nCheck for the game messages file named \r\n" +
                                fname
                            );
                        });
                }
            }, function() {
                alert("Error loading map json.");
            });
        }
        getMap(); // first run
    }
});
