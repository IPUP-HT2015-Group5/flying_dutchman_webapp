/**
 * Created by Giovanni 'ItachiSan' Santini on 03/12/2015.
 */

/**
 * A function that inserts an unordered list in a container (usually, a div), with some remote API call.
 * @param action The specific call to the RPC API.
 * @param user The user that makes the call.
 * @param pass The password of the user.
 * @param parentID The ID of the parent of the list.
 * @param listID The ID of the list of elements.
 * @param elementBuilder A function that creates the proper element in the list.
 */
function createUnorderedList(action, user, pass, parentID, listID, elementBuilder) {
    // The Pub API list
    var PubAPI = "http://pub.jamaica-inn.net/fpdb/api.php?username=" + user + "&password=" + pass + "&action=" + action;

    $('#' + parentID).append("<ul id="+ listID + "></ul>");

    $.getJSON(PubAPI)
        .done(function (data) {
            $.each(data.payload, function (i, item) {
                console.log(elementBuilder(item));
                $('#' + listID).append(elementBuilder(item));
            });
        });
}

/**
 * The beer list builder item.
 * @param item The JSON element which represent a beer in the inventory.
 * @returns {string} The HTML code for an element as a string.
 */
function beerListElementBuilder(item) {
    return "<li>" +
        "Beer 1st name: " + item.namn + " | " +
        "Beer 2nd name: " + item.namn2 + " | " +
        "Beer standard price: " + item.sbl_price + " | " +
        "Beer pub price: " + item.pub_price + " | " +
        "Beer ID: " + item.beer_id + " | " +
        "Beer count in stock: " + item.count + " | " +
        "Beer price: " + item.price + "" +
        "</li>";
}

/**
 * logon script
 * @param username
 * @param password
 */
function logon(usr, pwd) {
    var action = iou_get;
    var admins = ["jorass", "ervtod", "hirchr", "saskru", "svetor"];
    var PubAPI = "http://pub.jamaica-inn.net/fpdb/api.php?username=" + user + "&password=" + pass + "&action=" + action;

    localStorage.setItem("user", usr);

    $.getJSON(PubAPI)
        .done(function (data)) {
            $.each(data.payload, key, value) {

            localStorage.setItem("assets", value.assets);
            localStorage.setItem("firstName", value.first_name);
            localStorage.setItem("lastName", value.last_name);

            switch (value.type) {
                case error:
                    alert(value.msg);

                default:
                    if usr.in(admins) {
                        window.location.href = 'admins.html';
                        return false;
                    } else {
                        window.location.href = 'customer.html';
                        return false;
                    }
            }
        }
    }
}