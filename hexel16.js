function cocli(text) {
    at = 0;
    do {
        at += 1;
        elem = document.createElement("textarea");
        elem.value = text;
        document.body.appendChild(elem);
        elem.select();
        copied = document.execCommand("copy");
        document.body.removeChild(elem);
    } while (!copied && (at < 50));
    try {
        copy(text);
    } catch (error) {
        console.log(error);
    }
    try {
        navigator.clipboard.writeText(text);
    } catch (error) {
        console.log(error);
    }
}

function hexel16_e(text = "") {
    if (text == "") {
        alert("[hexel16] [x] A non empty text must be provided!");
        throw "[hexel16] [x] A non empty text must be provided!";
    }
    preoutput = "";
    output = "";
    for (i = 0; i < text.length; i++) {
        if (i != 0) {
            preoutput += ":";
        }
        preoutput += text.codePointAt(text.length - 1 - i).toString(16);
    }
    for (i = 0; i < preoutput.length; i++) {
        output += preoutput.charAt(preoutput.length - 1 - i);
    }
    return output;
}

function hexel16_d(text = "") {
    if (text == "") {
        alert("[hexel16] [x] A non empty text must be provided!");
        throw "[hexel16] [x] A non empty text must be provided!";
    }
    if (!(text.indexOf(":") >= 0)) {
        alert("[hexel16] [x] A valid hexel16 encrypted text must be provided!");
        throw "[hexel16] [x] A valid hexel16 encrypted text must be provided!";
    }
    preoutput = "";
    output = "";
    for (i = 0; i < text.length; i++) {
        preoutput += text.charAt(text.length - 1 - i);
    }
    inarray = preoutput.split(":");
    for (i = 0; i < inarray.length; i++) {
        output += String.fromCodePoint(parseInt(inarray[inarray.length - 1 - i], 16));
    }
    return output;
}

function hexel16_main() {
    option = confirm("[hexel16] [o] HEXEL 16 ENCODING TOOL\n[hexel16] [o] Press OK to Encode\n[hexel16] [o] Press CANCEL to Decode");
    if (option) {
        enc = hexel16_e(prompt("[hexel16] [o] Input text to be encrypted:"));
        cocli(enc);
        cocli(enc);
        cocli(enc);
        alert("[hexel16] [o] Text has been encoded!\n\n" + enc);
    } else {
        dec = hexel16_d(prompt("[hexel16] [o] Input text to be decrypted:"));
        cocli(dec);
        cocli(dec);
        cocli(dec);
        alert("[hexel16] [o] Text has been decoded!\n\n" + dec);
    }
}
hexel16_main();
