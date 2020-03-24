var answer = ["1", "2", "3", "4"];

var example_question_text = "<p>There are three practice items and this is the first one.</p>";

function question_text(image_title) {
    var question = null;
    question = "<p>";
        question += "<img src=\"https://github.com/alsugiharto/experiment-design/blob/master/images/" + image_title + ".png?raw=true\" alt=\"Italian Trulli\">";
    question += "</p>";
    question += "<p>Select the video you most likely click.</p>";
    question += "<p>The number follows the order of the video.</p>";
    return question;
}

var shuffleSequence = seq("intro", sepWith("sep", seq("practice")), "startexp", sepWith("sep", rshuffle(startsWith("exp"), startsWith("control"))));

var practiceItemTypes = ["practice"];

var q = "Question";

var defaults = [ "Separator", { transfer: 1000, normalMessage: "Please wait for the next question." },
"Question", {hasCorrect: false, randomOrder: false, showNumbers: false}, "Message", { hideProgressBar: true } ];

var items = [ ["sep", "Separator", { }],

["intro", "Form", { html: { include: "example_intro.html" } }],

["startexp", "Message", {html: "This is the end of the practice session. The experiment begins now."}],
["practice", q, {q: example_question_text + question_text("practice_1"),
                 as: answer, hasCorrect: false,
                 instructions: ""}],
["practice", q, {q: example_question_text + question_text("practice_2"),
                 as: answer, hasCorrect: false,
                 instructions: ""}],
["practice", q, {q: example_question_text + question_text("practice_3"),
                 as: answer, hasCorrect: false,
                 instructions: ""}],

[["exp-emotion-withemotion-item1", 1], q, {q: question_text("practice_2"), as: answer}],
[["exp-emoji-withemoji-item1", 1], q, {q: question_text("practice_2"), as: answer}],
[["exp-emotion-withoutemotion-item1", 1], q, {q: question_text("practice_2"), as: answer}],
[["exp-emoji-withoutemoji-item1", 1], q, {q: question_text("practice_2"), as: answer}],

[["exp-emotion-withemotion-item2", 2], q, {q: question_text("practice_2"), as: answer}],
[["exp-emoji-withemoji-item2", 2], q, {q: question_text("practice_2"), as: answer}],
[["exp-emotion-withoutemotion-item2", 2], q, {q: question_text("practice_2"), as: answer}],
[["exp-emoji-withoutemoji-item2", 2], q, {q: question_text("practice_2"), as: answer}],

[["exp-emotion-withemotion-item3", 3], q, {q: question_text("practice_2"), as: answer}],
[["exp-emoji-withemoji-item3", 3], q, {q: question_text("practice_2"), as: answer}],
[["exp-emotion-withoutemotion-item3", 3], q, {q: question_text("practice_2"), as: answer}],
[["exp-emoji-withoutemoji-item3", 3], q, {q: question_text("practice_2"), as: answer}],

[["exp-emotion-withemotion-item4", 4], q, {q: question_text("practice_2"), as: answer}],
[["exp-emoji-withemoji-item4", 4], q, {q: question_text("practice_2"), as: answer}],
[["exp-emotion-withoutemotion-item4", 4], q, {q: question_text("practice_2"), as: answer}],
[["exp-emoji-withoutemoji-item4", 4], q, {q: question_text("practice_2"), as: answer}],

[["exp-emotion-withemotion-item5", 5], q, {q: question_text("practice_2"), as: answer}],
[["exp-emoji-withemoji-item5", 5], q, {q: question_text("practice_2"), as: answer}],
[["exp-emotion-withoutemotion-item5", 5], q, {q: question_text("practice_2"), as: answer}],
[["exp-emoji-withoutemoji-item5", 5], q, {q: question_text("practice_2"), as: answer}],

[["exp-emotion-withemotion-item6", 6], q, {q: question_text("practice_2"), as: answer}],
[["exp-emoji-withemoji-item6", 6], q, {q: question_text("practice_2"), as: answer}],
[["exp-emotion-withoutemotion-item6", 6], q, {q: question_text("practice_2"), as: answer}],
[["exp-emoji-withoutemoji-item6", 6], q, {q: question_text("practice_2"), as: answer}],

[["exp-emotion-withemotion-item7", 7], q, {q: question_text("practice_2"), as: answer}],
[["exp-emoji-withemoji-item7", 7], q, {q: question_text("practice_2"), as: answer}],
[["exp-emotion-withoutemotion-item7", 7], q, {q: question_text("practice_2"), as: answer}],
[["exp-emoji-withoutemoji-item7", 7], q, {q: question_text("practice_2"), as: answer}],

[["exp-emotion-withemotion-item8", 8], q, {q: question_text("practice_2"), as: answer}],
[["exp-emoji-withemoji-item8", 8], q, {q: question_text("practice_2"), as: answer}],
[["exp-emotion-withoutemotion-item8", 8], q, {q: question_text("practice_2"), as: answer}],
[["exp-emoji-withoutemoji-item8", 8], q, {q: question_text("practice_2"), as: answer}],


["control-item1", q, {q: question_text("practice_2"), as: answer}],

["control-item2", q, {q: question_text("practice_2"), as: answer}],

["control-item3", q, {q: question_text("practice_2"), as: answer}],

["control-item4", q, {q: question_text("practice_2"), as: answer}],

["control-item5", q, {q: question_text("practice_2"), as: answer}],

["control-item6", q, {q: question_text("practice_2"), as: answer}]

];