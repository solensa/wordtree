var orgTree = [
  ["0", "Nouns", "hello", "hello2", "A noun is a word that names something, such as a person, place, thing, or idea. In a sentence, nouns can play the role of subject, direct object, indirect object, subject complement, object complement, appositive, or adjective."],
  ["1", "Pronouns", "", "", "Pronouns are short words we swap in for other nouns to make our writing and speech faster and more varied. They're words like: They, I, You, Who, Themselves, Each other."],
  ["2", "Adjectives", "", "", "Adjectives are words that modify nouns. They are often called “describing words” because they give us further details about a noun, such as what it looks like (the white horse), how many there are (the three boys) or which one it is (the last house). Adjectives do not modify verbs or other adjectives."],
  ["3", "Verbs", "", "", "Verbs are words that describe actions, whether physical or mental. Verbs also describe a “state of being,” like the verbs be, become, or exist."],
  ["4", "Adverbs", "", "", "An adverb is a word that describes a verb (e.g. he sings <strong>loudly</strong>), an adjective (e.g. <strong>very</strong> tall), another adverb (e.g. ended too <strong>quickly</strong>), or even a whole sentence (e.g. <strong>Fortunately</strong>, I had brought an umbrella). Adverbs often end in -ly, but some (such as fast) look exactly the same as their adjective counterparts."],
  ["0-0", "Proper Nouns", "", "", "A proper noun is a specific name of a person, place, or thing, and is always capitalized.<br><em>Robert lives in London.</em><br>Robert and London are proper nouns"],
  ["0-1", "Common / Generic Nouns ", "", "", "A common noun (sometimes called generic nnoun) is the generic name of an item in a class or group and is not capitalized unless appearing at the beginning of a sentence or in a title.<br><em>The girl crossed the river</em><br>Girl and river are common nouns."],
  ["0-1-0", "Concrete Nouns", "", "", "A concrete noun is something that is perceived by the senses; something that is physical or real.<br><em>I heard the doorbell.</em><br>Doorbell is a concrete noun."],
  ["0-1-1", "Abstract Nouns", "", "", "An abstract noun is something that cannot be perceived by the senses.<br><em>We can't imagine the courage it took to do that.</em><br>Courage is an abstract noun."],
  ["0-1-2", "Collective Nouns", "", "", "A collective noun denotes a group or collection of people or things.<br><em>A pride of lions roamed the savanna.</em><br>Pride of lions is also a collective noun."],
  ["1-0", "Personal Pronouns", "", "", "Personal pronouns are pronouns that refer to specific individuals and groups. Personal pronouns include:<br><em>I/me, She/her, He/him, They/them, We/us, You.</em>"],
  ["1-1", "Relative Pronouns", "", "", "Relative pronouns connect relative clauses to independent clauses. Often, they introduce additional information about something mentioned in the sentence. Relative pronouns include these words: <br><em>That, what, which, who, whom.</em>"],
  ["1-2", "Demonstrative Pronouns", "", "", "That, this, these, and those are demonstrative pronouns. They take the place of a noun or noun phrase that has already been mentioned or is clear through context, either in written or verbal communication."],
  ["1-3", "Indefinite Pronouns", "", "", "Indefinite pronouns are used when you need to refer to a person or thing that doesn't need to be specifically identified. Some common indefinite pronouns are one, other, none, some, anybody, everybody, and no one."],
  ["1-4", "Reflexive Pronouns", "", "", "Reflexive pronouns end in -self or -selves:<br><em>Myself, yourself, himself, herself, itself, oneself, ourselves, yourselves, themselves.</em>"],
  ["1-5", "Intensive Pronouns", "", "", "Intensive pronouns look the same as reflexive pronouns, but their purpose is different. Intensive pronouns add emphasis. Conceptualizing the difference between them and reflexive pronouns can be challenging because the emphasis isn't always obvious. Take a look at this example and examine how they're different.<br><em>We asked ourselves, is this business really worth saving?</em><br>If you can remove a pronoun from a sentence and it loses emphasis but its meaning stays the same, it's most likely an intensive pronoun."],
  ["1-6", "Possessive Pronouns", "", "", "Possessive pronouns are pronouns that show possession. They include the following:<br><em>My, your, our, their, his, her, its.</em>"],
  ["1-7", "Interrogative Pronouns", "", "", "Interrogative pronouns are used in questions. The interrogative pronouns are:<br><em>Who, what, which, and whose.</em>"],
  ["1-8", "Reciprocal Pronouns", "", "", "Reciprical pronouns refer to two or more people who are both the subject of the sentence. There are only two reciprocal pronouns:<br><em>Each other, One another.</em>"],
  ["1-9", "Distributive Pronouns", "", "", "Distributive pronouns refer to people, animals, and objects as individuals within larger groups. They enable you to single out individuals while acknowledging that they're part of a larger group. Distributive pronouns include the following:<br><em>Either, Each, Neither, Any, None.</em><br>"],
  ["2-0", "Descriptive Adjectives", "", "", "Generally, a descriptive adjective is probably what you think of when you hear the word “adjective.” Descriptive adjectives describe nouns and pronouns."],
  ["2-1", "Limiting Adjectives", "", "", "Limiting adjectives do as their name suggests, they limit the noun being described."],
  ["2-0-0", "Attributive Adjectives", "", "", "Adjectives which appear directly beside the noun, most commonly before, are called attributive, because they attribute a quality to the noun they modify. And, more than one adjective can modify the same noun:<br><em>The flowers have a nice smell.</em><br>“Nice” is an attributive adjective, as it is placed."],
  ["2-0-1", "Predicate Adjectives", "", "", "Adjectives which appear after a linking verb are predicative adjectives, because they form part of the predicate. Hence, they modify the subject of the sentence or clause (a clause is a portion of a sentence which contains a subject and a predicate):<br><em>The pickles are salty.</em><br>salty describes the noun pickles"],
  ["2-1-0", "Possessive Adjectives", "", "", "The possessive adjectives my, your, his, her, its, our, and their modify nouns by showing possession or ownership.<br><em>I forgot my key at home.</em><br>My is Possessive adjective"],
  ["2-1-1", "Demonstrative Adjectives", "", "", "The demonstrative adjectives “this,” “these,” “that,” “those,” and “what” are identical to the demonstrative pronouns, but are used as adjectives to modify nouns or noun phrases.<br><em>That dog is so adorable.</em><br>That is an demonstrative adjective."],
  ["2-1-2", "Indefinite Adjectives", "", "", "An indefinite adjective is similar to an indefinite pronoun, except that it modifies a noun, pronoun, or noun phrase.<br><em>Many people continue to ignore warnings about the dangers of sunbathing.</em><br>Many is an indefinite adjective."],
  ["2-1-3", "Interrogative Adjectives", "", "", "An interrogative adjective (“which” or “what”) is like an interrogative pronoun, except that it modifies a noun or noun phrase rather than standing on its own (see also demonstrative adjectives and possessive adjectives).<br><em>Which method is likely to produce the best results?</em><br>Which is an interrogative adjective."],
  ["2-1-4", "Cardinal Adjectives", "", "", "Adjectives that modify the noun by numbering it (stating how many) are cardinal adjectives.<br><em>Five pens</em><br>Five is a cardinal adjective."],
  ["2-1-5", "Ordinal Adjectives", "", "", "An ordinal adjective indicates the position of a noun in a series.<br><em>The third month.</em><br>Third is an ordinal adjective."],
  ["2-1-6", "Proper Adjectives", "", "", "Adjectives derived from proper names are called proper adjectives. They are easily recognizable in that they are always capitalized.<br><em>Japanese food.</em><br>Japanese is a proper adjective."],
  ["2-1-7", "Nouns used as Adjectives", "", "", "Sometimes nouns can be used as adjectives to define or describe another noun.<br><em>The computer exhibition.</em><br>Computer is a noun used as an adjective."],
  ["3-0", "Action Verbs", "", "", "Action verbs are words that express action (give, eat, walk, etc.) or possession (have, own, etc.)."],
  ["3-1", "Linking Verbs", "", "", "A linking verb connects the subject of a sentence to a noun or adjective that renames or describes the subject. This noun or adjective is called the subject complement. <br><em>Lisa is in love with Jason.</em>The verb, is, links the subject, Lisa, to the subject complement, in love with Jason (describing Lisa)."],
  ["3-2", "Helping / Auxiliary Verbs", "", "", "Helping verbs are used before action or linking verbs to convey additional information regarding aspects of possibility (can, could, etc.) or time (was, did, has, etc.). The main verb with its accompanying helping verb is called a verb phrase.:<br><em>The trip might be dangerous.</em>Might is a helping verb, be is the main verb."],
  ["3-0-0", "Transitive Verbs", "", "", "A transitive verb always has a noun that receives the action of the verb, called the direct object:<br><em>Laurissa raises her hand.</em>The verb is raises. Her hand is the object receiving the verb’s action. Therefore, raises is a transitive verb."],
  ["3-0-1", "Intransitive Verbs", "", "", "An intransitive verb never has a direct or indirect object. Although an intransitive verb may be followed by an adverb or adverbial phrase, there is no object to receive its action.:<br><em>: Laurissa rises slowly from her seat.</em>The verb is rises. The phrase, slowly from her seat, modifies the verb, but no object receives the action."],

];

window.onload = function () {
  numberOfFieldsVar();
  createContent();
};

var numberOfFields = 0;

// Create all the variables that store the relevent values from the input arr. It'd be better to use an array - refactor in future.
for (let i = 0; i < 100; i++) {
  window["fieldLength" + i + "Store"] = [];
  window["buttonLength" + i + "Store"] = [];
  console.log(i);
}

function numberOfFieldsVar() {
  for (i = 0; i < orgTree.length; i++) {
    var idString = orgTree[i][0];
    if ((idString.match(/-/g) || []).length > numberOfFields) {
      numberOfFields = (idString.match(/-/g) || []).length;
    }

    var num = (idString.match(/-/g) || []).length;

    if (num == 0) {
      fieldLength1Store.push("field" + orgTree[i][0]);
      buttonLength1Store.push("btn" + orgTree[i][0]);
    } else {
      var res = orgTree[i][0].split("-");
      let fieldLengthStoreStr = "fieldLength" + res.length + "Store";
      let buttonLengthStoreStr = "buttonLength" + res.length + "Store";

      let fieldPushStr = "field";
      let btnPushStr = "btn";
      for (let j = 0; j < res.length; j++) {
        fieldPushStr += res[j] + "-";
        btnPushStr += res[j] + "-";
      }
      window[fieldLengthStoreStr].push(
        fieldPushStr.substring(0, fieldPushStr.length - 1)
      );
      window[buttonLengthStoreStr].push(
        btnPushStr.substring(0, btnPushStr.length - 1)
      );
    }
  }
  //alert(buttonLength3Store.join('\n'));
  numberOfFields++;
}

function createContent() {
  var div = document.createElement("div");
  div.id = "test";
  var htmlString = "";
  var fieldTemp = "";
  var buttonLengthStoreTemp = "";
  var fieldID = "";
  var buttonLengthStoreID = "";
  var btnParentID = "";
  var btnID = "";
  var btnString = "";
  var fieldString = "";
  var btnName = "";

  //Loop through Orgtree array
  for (i = 0; i < orgTree.length; i++) {
    //Create field
    fieldID = orgTree[i][0];
    fieldTemp = "field" + fieldID;

    fieldString =
      '<fieldset id="' +
      fieldTemp +
      '" style="visibility: hidden; display:none"><div class="contentWrap"><legend><h1><a href="' +
      orgTree[i][3] +
      '">' +
      orgTree[i][1] +
      '</a></h1></legend><p class="textBox"><em>' +
      orgTree[i][2] +
      '</em><h4 class="idNumber">' +
      orgTree[i][0] +
      "</h4>" +
      orgTree[i][4] +
      '</p></div><div class="centreBtn"><div class="btnWrap">';

    htmlString += fieldString;

    //Find correct btnLengthStore
    buttonLengthStoreID = (fieldID.match(/-/g) || []).length + 2;
    var z = "buttonLength" + buttonLengthStoreID + "Store";
    buttonLengthStoreTemp = window[z];

    for (j = 0; j < buttonLengthStoreTemp.length; j++) {
      btnID = buttonLengthStoreTemp[j].replace(/btn/g, "");
      btnParentID = btnID.substr(0, btnID.lastIndexOf("-"));
      if (btnParentID == fieldID) {
        var btnClickArr = btnID.replace(/-/g, ",");

        //find btn name
        for (jj = orgTree.length - 1; jj >= 0; jj--) {
          if (orgTree[jj][0] == btnID) {
            btnName = orgTree[jj][1];
            jj = -1;
          }
        }

        btnString =
          '<span class="unselectedBtn"><input type="button" id="' +
          buttonLengthStoreTemp[j] +
          '" class="unselectedBtn" value="' +
          btnName +
          '" onClick="btnClick([' +
          btnClickArr +
          '])"></span>';

        htmlString += btnString;
      }
    }
    htmlString += "</div></div></fieldset>";
  }
  //alert(htmlString);
  div.innerHTML = htmlString;
  document.getElementById("htmlStuff").appendChild(div);
}

function getSearchData() {
  var dataString = "";
  if (document.getElementById("btnPerson").className === "unselectedBtn2") {
    for (i = 0; i < orgTree.length; i++) {
      if (i < orgTree.length - 1) {
        dataString += orgTree[i][1] + ", ";
      } else {
        dataString += orgTree[i][1];
      }
    }
  } else {
    for (i = 0; i < orgTree.length; i++) {
      if (i < orgTree.length - 1) {
        dataString += orgTree[i][2] + ", ";
      } else {
        dataString += orgTree[i][2];
      }
    }
  }
  return dataString;
}

function goTo(name) {
  //find match in orgTree array
  var orgID = "";
  var clickAction;

  if (document.getElementById("btnPerson").className === "selectedBtn2") {
    for (jj = orgTree.length - 1; jj >= 0; jj--) {
      if (orgTree[jj][2] == name) {
        orgID = orgTree[jj][0];
        jj = -1;
      }
    }
  } else {
    for (jj = orgTree.length - 1; jj >= 0; jj--) {
      if (orgTree[jj][1] == name) {
        orgID = orgTree[jj][0];
        jj = -1;
      }
    }
  }

  //click the appropriate buttons in succession
  var i = (orgID.match(/-/g) || []).length + 1;
  var orgIDArray = orgID.split("-");
  var clickString;

  for (z = 0; z < i; z++) {
    if (z == 0) {
      clickString = orgIDArray[0];
    } else {
      clickString += "-" + orgIDArray[z];
    }
    clickAction = document.getElementById("btn" + clickString);
    clickAction.click();
  }
}

// ## JavaScript Functions
function makeButtonSelected(button) {
  var element = document.getElementById(button);
  if (typeof element != "undefined" && element != null) {
    if (document.getElementById(button).className === "unselectedBtn") {
      document.getElementById(button).className = "selectedBtn";
    }
  } else {
    //alert(button + " does not exist");
  }
}

function makeButtonUnselected(button) {
  var element = document.getElementById(button);
  if (typeof element != "undefined" && element != null) {
    if (document.getElementById(button).className === "selectedBtn") {
      document.getElementById(button).className = "unselectedBtn";
    }
  } else {
    //alert(button + " does not exist");
  }
}

function closeButtonsWithLength(num) {
  var store = "buttonLength" + num + "Store";
  for (i = 0; i < window[store].length; i++) {
    makeButtonUnselected(window[store][i]);
  }
}

function makeFieldVisible(field) {
  var element = document.getElementById(field);
  if (typeof element != "undefined" && element != null) {
    document.getElementById(field).style.visibility = "visible";
    document.getElementById(field).style.display = "block";
  } else {
    //alert(field + " does not exist");
  }
}

function makeFieldInvisible(field) {
  var element = document.getElementById(field);
  if (typeof element != "undefined" && element != null) {
    document.getElementById(field).style.visibility = "hidden";
    document.getElementById(field).style.display = "none";
  } else {
    //alert(field + " does not exist");
  }
}

function closeFieldsWithLength(num) {
  while (num <= numberOfFields) {
    var store = "fieldLength" + num + "Store";
    if (window[store]) {
      for (i = 0; i < window[store].length; i++) {
        makeFieldInvisible(window[store][i]);
      }
    }
    num++;
  }
}

function doesFieldExist(field, array) {
  var num = array.length;
  var store = "fieldLength" + num + "Store";
  if (window[store]) {
    for (var i = 0; i < window[store].length; i++) {
      if (window[store][i] === field) return true;
    }
  }
  return false;
}

function btnClick(array) {
  var button = "btn";
  var field = "field";

  for (i = 0; i < array.length; i++) {
    field += array[i].toString();
    button += array[i].toString();
    if (i != array.length - 1) {
      field += "-".toString();
      button += "-".toString();
    }
  }

  closeFieldsWithLength(array.length);
  closeButtonsWithLength(array.length);

  if (doesFieldExist(field, array)) {
    makeFieldVisible(field);
  }
  makeButtonSelected(button);
  goToByScroll(field);
}

function btnClick2() { }

function goToByScroll(id) {
  $("html,body").animate(
    {
      scrollTop: $("#" + escapeSelector(id)).offset().top,
    },
    "normal"
  );
}
function escapeSelector(s) {
  return s.replace(/(:|\.|\[|\])/g, "\\$1");
}
function showInputID(inputID) {
  document.getElementById(inputID).style.visibility = "visible";
  document.getElementById(inputID).style.display = "inline-block";
}

function hideInputID(inputID) {
  document.getElementById(inputID).style.visibility = "hidden";
  document.getElementById(inputID).style.display = "none";
}


