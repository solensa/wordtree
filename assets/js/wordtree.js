/*
0 - index
1 - part of speech
2 - examples of part of speech
3 - example sentence
4 - definition of part of speech
*/

var orgTree = [["0", "Nouns", "", "①　The <h5>tree</h5> is tall.", "A noun is a word that names something, such as a person, place, thing, or idea. In a sentence, nouns can play the role of subject, direct object, indirect object, subject complement, object complement, appositive, or adjective."], ["1", "Pronouns", "They, I, You, Who, We, Themselves, Each other", "①　<h5>We</h5> watered the sapling.", "Pronouns are short words we swap in for other nouns to make our writing and speech faster and more varied."], ["2", "Adjectives", "", "①　The <h5>green</h5> leaves.<br> ②　The <h5>three</h5> branches.<br> ③　The <h5>last</h5> tree.", "Adjectives are words that modify nouns. They are often called “describing words” because they give us further details about a noun, such as what it looks like, how many there are or which one it is. Adjectives do not modify verbs or other adjectives."], ["3", "Verbs", "", "①　The monkey <h5>swung</h5> from the tree.", "Verbs are words that describe actions, whether physical or mental. Verbs also describe a “state of being,” like the verbs be, become, or exist."], ["4", "Adverbs", "", " ①　(verb) He sings <h5>loudly</h5>.<br> ②　(adjective) It's <h5>very</h5 > tall.<br> ③　(adverb) It ended too <h5>quickly</h5><br> ④　(sentence) <h5>Fortunately</h5>, I had brought an umbrella.", "An adverb is a word that describes a verb, an adjective, another adverb, or even a whole sentence. Adverbs often end in -ly, but some (such as fast) look exactly the same as their adjective counterparts."], ["0-0", "Proper Nouns", "", "①　<h5>Rob</h5> lives in <h5>London</h5>.", "A proper noun is a specific name of a person, place, or thing, and is always capitalised."], ["0-1", "Common / Generic Nouns ", "", "①　The <h5>girl</h5> crossed the <h5>river</h5>.", "A common noun (sometimes called generic noun) is the generic name of an item in a class or group and is not capitalized unless appearing at the beginning of a sentence or in a title."], ["0-1-0", "Concrete Nouns", "", "①　I heard the <h5>doorbell</h5>.", "A concrete noun is something that is perceived by the senses; something that is physical or real."], ["0-1-1", "Abstract Nouns", "", "①　We can't imagine the <h5>courage</h5> it took to do that.", "An abstract noun is something that cannot be perceived by the senses."], ["0-1-2", "Collective Nouns", "", "①　A <h5>pride</h5> of lions roamed the savanna.", "A collective noun denotes a group or collection of people or things."], ["1-0", "Personal Pronouns", "I / me, She / her, He / him, They / them, We / us, You", "①　<h5>You</h5> need to stop lying to <h5>me</h5>.<br> ②　<h5>We</h5> would love for you to join <h5>us</h5>.<br> ③　<h5>He</h5> has climbed to the top of that tree.", "Personal pronouns are pronouns that refer to specific individuals and groups."], ["1-1", "Relative Pronouns", "That, what, which, who, whom", "①　The runner <h5>who</h5> won the race trained hard.<br> ②　The four monkeys, <h5>whoever</h5> Tony selects, will dance tomorrow.<br> ③　Where did you buy the apple <h5>that</h5> you ate yesterday?", "Relative pronouns connect relative clauses to independent clauses. Often, they introduce additional information about something mentioned in the sentence."], ["1-2", "Demonstrative Pronouns", "That, this, these, those", "①　<h5>This</h5> was once a seed.<br> ②　<h5>Such</h5> was her command over the English language.<br> ③　<h5>None</h5> of these answers are correct.", "They take the place of a noun or noun phrase that has already been mentioned or is clear through context, either in written or verbal communication."], ["1-3", "Indefinite Pronouns", "One, other, none, some, anybody, everybody, no one", "①　The cat saw <h5>somebody</h5> sneaking around.<br> ②　<h5>Most of the monkeys left, but <h5>several</h5> of them are still here.<br> ③　We tried <h5>everything</h5>, but <h5>nothing</h5> worked.", "Indefinite pronouns are used when you need to refer to a person or thing that doesn't need to be specifically identified."], ["1-4", "Reflexive Pronouns", "Myself, yourself, himself, herself, itself, oneself, ourselves, yourselves, themselves", "①　I was in a hurry, so I went by <h5>myself</h5>.<br> ②　This tree is in a field all by <h5>itself</h5>.<br> ③　We don’t have to go; we can fix dinner <h5>ourselves</h5>.", "Reflexive pronouns end in -self or -selves."], ["1-5", "Intensive Pronouns", "", "①　We asked <h5>ourselves</h5>, is this business really worth saving?", "Intensive pronouns look the same as reflexive pronouns, but their purpose is different. Intensive pronouns add emphasis. Conceptualising the difference between them and reflexive pronouns can be challenging because the emphasis isn't always obvious. If you can remove a pronoun from a sentence and it loses emphasis but its meaning stays the same, it's most likely an intensive pronoun."], ["1-6", "Possessive Pronouns", "My, your, our, their, his, her, its", "①　Tony says that the cat is <h5>his</h5>.<br> ②　I want to be <h5>yours</h5> forever. Will you marry me?<br> ③　This is <h5>my</h5> friend, Rob.", "Possessive pronouns are pronouns that show possession."], ["1-7", "Interrogative Pronouns", "Who, what, which, and whose", "①　<h5>What</h5> do you want for your birthday?<br> ②　<h5>Which</h5> branch can you reach?<br> ③　<h5>Who</h5> can climb that tree?<br>④　To <h5>whom</h5> are you speaking?<br>⑤　<h5>Whose</h5> gloves are those?", "Interrogative pronouns are used in questions."], ["1-8", "Reciprocal Pronouns", "Each other, One another", "①　We buy <h5>each other</h5> drinks during the summer.<br> ②　The monkeys spent the afternoon throwing an apple to <h5>one another</h5>.", "Reciprical pronouns refer to two or more people who are both the subject of the sentence. There are only two reciprocal pronouns."], ["1-9", "Distributive Pronouns", "Either, Each, Neither, Any, None, Others", "①　<h5>Each</h5> of the monkeys have climbed the tree.<br> ②　I may buy <h5>either</h5> of these two apples.<br> ③　<h5>Any</h5> of you can help improve Wordtree.", "Distributive pronouns refer to people, animals, and objects as individuals within larger groups. They enable you to single out individuals while acknowledging that they're part of a larger group."], ["2-0", "Descriptive Adjectives", "", "①　I don’t like <h5>cold</h5> weather.<br> ②　The apples are really <h5>expensive</h5>.<br> ③　We picked <h5>red</h5>, <h5>green</h5>, and <h5>pink</h5> apples.", "Generally, a descriptive adjective is probably what you think of when you hear the word “adjective.” Descriptive adjectives describe nouns and pronouns."], ["2-1", "Limiting Adjectives", "", "①　Rob picked <h5>some</h5> apples.", "Limiting adjectives do as their name suggests, they limit the noun being described. In the example below, 'some' restricts the apples by saying that Rob picked more than one apple. More importantly, the adjective some doesn’t describe anything about the apples. "], ["2-0-0", "Attributive Adjectives", "", "①　The flowers have a <h5>nice</h5> smell.", "Adjectives which appear directly beside the noun, most commonly before, are called attributive, because they attribute a quality to the noun they modify. And, more than one adjective can modify the same noun."], ["2-0-1", "Predicate Adjectives", "", "①　The potatoes are <h5>salty</h5>.", "Adjectives which appear after a linking verb are predicative adjectives, because they form part of the predicate. Hence, they modify the subject of the sentence or clause (a clause is a portion of a sentence which contains a subject and a predicate)."], ["2-1-0", "Possessive Adjectives", "My, your, his, her, its, our, their", "①　I forgot <h5>my</h5> wallet at home.", "The possessive adjectives my, your, his, her, its, our, and their modify nouns by showing possession or ownership."], ["2-1-1", "Demonstrative Adjectives", "This, that, these, those, what", "①　<h5>That</h5> dog is so adorable.", "Demonstrative adjectives are identical to the demonstrative pronouns, but are used as adjectives to modify nouns or noun phrases."], ["2-1-2", "Indefinite Adjectives", "", "①　<h5>Many</h5> people continue to ignore warnings about the dangers of sunbathing.", "An indefinite adjective is similar to an indefinite pronoun, except that it modifies a noun, pronoun, or noun phrase."], ["2-1-3", "Interrogative Adjectives", "Which, what", "①　<h5>Which</h5> method is likely to produce the best results?", "An interrogative adjective is like an interrogative pronoun, except that it modifies a noun or noun phrase rather than standing on its own (see also demonstrative adjectives and possessive adjectives)."], ["2-1-4", "Cardinal Adjectives", "", "①　<h5>Five</h5> apples.", "Cardinal adjectives modify the noun by numbering it (stating how many)."], ["2-1-5", "Ordinal Adjectives", "", "①　The <h5>third</h5> month.", "An ordinal adjective indicates the position of a noun in a series."], ["2-1-6", "Proper Adjectives", "", "①　<h5>Japanese</h5> food.", "Adjectives derived from proper names are called proper adjectives. They are easily recognizable in that they are always capitalized."], ["2-1-7", "Nouns used as Adjectives", "", "①　The <h5>garden</h5> exhibition.", "Sometimes nouns can be used as adjectives to define or describe another noun."], ["3-0", "Action Verbs", "", "①　Rob <h5>climbed</h5> the tree.", "Action verbs are words that express action (give, eat, walk, etc.) or possession (have, own, etc.)."], ["3-1", "Linking Verbs", "", "①　Tony <h5>is</h5> in love with food.", "A linking verb connects the subject of a sentence to a noun or adjective that renames or describes the subject. This noun or adjective is called the subject complement. In the below example, the verb,'is' links the subject, Tony, to the subject complement, in love with food."], ["3-2", "Helping / Auxiliary Verbs", "", "①　The trip <h5>might</h5> be dangerous.", "Helping verbs are used before action or linking verbs to convey additional information regarding aspects of possibility (can, could, etc.) or time (was, did, has, etc.). The main verb with its accompanying helping verb is called a verb phrase."], ["3-0-0", "Transitive Verbs", "", "①　Tony <h5>raises</h5> his hand.", "A transitive verb always has a noun that receives the action of the verb, called the direct object. In the below example, Tony's hand is the object receiving the verb’s action. Therefore, raises is a transitive verb."], ["3-0-1", "Intransitive Verbs", "", "①　Tony <h5>rises</h5> slowly from his seat.", "An intransitive verb never has a direct or indirect object. Although an intransitive verb may be followed by an adverb or adverbial phrase, there is no object to receive its action. In the below example, the phrase 'slowly from his seat' modifies the verb, but no object receives the action."], ["5", "Prepositions", "", "①　Rob left his jacket <h5>in</h5> the treehouse.", "Prepositions show the relationship between other words in a sentence, usually in terms of space, distance, time, etc. Many prepositions tell us where or when something is in relation to something else or when something happened. Most prepositions have several definitions, so the meaning changes quite a bit in different contexts. Ending a sentence with a preposition is not a grammatical error."], ["6", "Conjunctions", "And, As, Because, But, For, Just as, Or, Neither, Nor, Not only, So, Whether, Yet", "①　I like climbing and eating, <h5>but</h5> I don’t like washing dishes afterward<br> ②　Tony is clearly exhausted, <h5>yet</h5> he insists on dancing till dawn", "Conjunctions are words that link other words, phrases, or clauses together. Conjunctions allow you to form complex, elegant sentences and avoid the choppiness of multiple short sentences."], ["7", "Articles", "", "①　'The hammer' refers to only one hammer, but '<h5>a</h5> hammer' refers to any hammer. ", "An article is a word that comes before a noun to show if it’s specific or general. Specific nouns use the article the and general nouns use the article a (or an if the next word starts with a vowel sound)."], ["7-0", "Definite Article", "The", "①　Are you going to <h5>the</h5> treehouse this weekend?", "The definite article is the word the. It limits the meaning of a noun to one particular thing. In the example below, the definite article tells you that your friend is referring to a specific treehouse that both of you know about. The definite article can be used with singular, plural, or uncountable nouns."], ["7-1", "Indefinite Article", "A, An", "①　Should I bring <h5>a</h5> gift to the party?<br> ②　I am going to bring <h5>an</h5> apple pie", "The indefinite article takes two forms. It’s the word a when it precedes a word that begins with a consonant. It’s the word an when it precedes a word that begins with a vowel. The indefinite article indicates that a noun refers to a general idea rather than a particular thing. In the first example below, your friend will understand that you are not asking about a specific type of gift or a specific item. In the second example the indefinite article indicates that she is not talking about a specific apple pie. Your friend probably doesn’t even have any pie yet. The indefinite article only appears with singular nouns."], ["6-0", "Coordinating Conjunctions", "For, and, nor, but, or, yet, so", "①　We needed a place to concentrate, <h5>so</h5> we packed up our things and went to the treehouse.", "Coordinating conjunctions allow you to join words, phrases, and clauses of equal grammatical rank in a sentence. Notice the use of the comma when a coordinating conjunction is joining two independent clauses."], ["6-1", "Subordinating Conjunctions", "Because, since, as, although, though, while, whereas, until, after, before", "①　I can stay out <h5>until</h5> the clock strikes twelve.", "Subordinating conjunctions join independent and dependent clauses. A subordinating conjunction can signal a cause-and-effect relationship, a contrast, or some other kind of relationship between the clauses."], ["6-2", "Correlative Conjunctions", "Both/and, either/or, neither/nor, not only/but, whether/or", "①　We could <h5>either</h5> hike up the mountain <h5>or</h5> swim in the lake this afternoon.", "Correlative conjunctions are conjunctions used to illustrate how two words or phrases within a sentence relate to each other. Correlative conjunctions always come in pairs. Though they can illustrate a correlation between the two words or phrases, they don’t necessarily have to."], ["5-0", "Simple Preposition", "By, for, in, at, with, on, of", "①　Rob drove the motorbike <h5>on</h5> the race track.", "A simple preposition is made up of one word."], ["5-1", "Compound Preposition", "Into, without, before, inside, outside, upon, underneat, throughout", "①　Tony applies his lipbalm <h5>throughout</h5> the day.", "A compound preposition consists of two words."], ["5-2", "Partical Preposition", "", "①　Tony will go to the gig <h5>barring</h5> sickness.", "A partical preposition is a present participle of certain verbs that function as a preposition."], ["5-3", "Phrasal Preposition", "", "①　Rob gets to the office <h5>round about</h5> midday.", "A phrasal preposition is a phrase that functions as a preposition."]

];

// [3] was the URL 

window.onload = function () {
  numberOfFieldsVar();
  createContent();
};

var numberOfFields = 0;

// Create all the variables that store the relevent values from the input arr. It'd be better to use an array - refactor in future.
for (let i = 0; i < 100; i++) {
  window["fieldLength" + i + "Store"] = [];
  window["buttonLength" + i + "Store"] = [];
  // console.log(i);
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
      '" style="visibility: hidden; display:none"><div class="contentWrap"><div><legend><h1>' +
      orgTree[i][1] +
      '</h1></legend><p class=""><em>' +
      orgTree[i][2] +
      '</em><p>' +
      orgTree[i][4] +
      '</p></div></div><div class="fs-18 mgb-10">For example:<p></p>' + 
      orgTree[i][3] + 
      '</div><div class="centreBtn"><div class="btnWrap">';

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
          '<span class="btnSpan"><input type="button" id="' +
          buttonLengthStoreTemp[j] +
          '" class="unselectedBtn" value="' +
          btnName +
          '" onClick="btnClick([' +
          btnClickArr +
          '])"></span>';

        htmlString += btnString;
      }
    }
    htmlString += '</div></div><div class="idNumber">' +
    orgTree[i][0] +
    "</div></fieldset>";
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


