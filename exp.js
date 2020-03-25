var answer = ["1", "2", "3", "4"];

function example_question_text(order) {
    return "<p>There are three practice items and this is the "+order+" one.</p>";
}

function question_text(image_title) {
    var question = null;
    question = "<p>";
        question += "<img src=\"https://github.com/alsugiharto/experiment-design/blob/master/images/" + image_title + ".png?raw=true\" alt=\"Italian Trulli\">";
    question += "</p>";
    question += "<p>Select the video you most likely click by selecting the number bellow.</p>";
    question += "<p>The number follows the order of the video.</p>";
    return question;
}

var shuffleSequence = seq("intro", sepWith("sep", seq("practice")), "startexp", sepWith("sep", rshuffle(startsWith("exp"), startsWith("control"))));

var practiceItemTypes = ["practice"];

var q = "Question";

var defaults = [ "Separator", { transfer: 0, normalMessage: "Please wait for the next question." },
"Question", {hasCorrect: false, randomOrder: false, showNumbers: false}, "Message", { hideProgressBar: true } ];

var items = [ ["sep", "Separator", { }],

["intro", "Form", { html: { include: "example_intro.html" } }],

["startexp", "Message", {html: "This is the end of the practice session. The experiment begins now."}],
["practice", q, {q: example_question_text("first") + question_text("example_1"),
                 as: answer, hasCorrect: false,
                 instructions: ""}],
["practice", q, {q: example_question_text("second") + question_text("example_2"),
                 as: answer, hasCorrect: false,
                 instructions: ""}],
["practice", q, {q: example_question_text("third") + question_text("example_3"),
                 as: answer, hasCorrect: false,
                 instructions: ""}],

[["exp_1_downright_emoji_with", 1], q, {q: question_text("exp_1_downright_emoji_with"), as: answer}],
[["exp_1_downright_emoji_without", 1], q, {q: question_text("exp_1_downright_emoji_without"), as: answer}],
[["exp_1_downright_emotion_with", 1], q, {q: question_text("exp_1_downright_emotion_with"), as: answer}],
[["exp_1_downright_emotion_without", 1], q, {q: question_text("exp_1_downright_emotion_without"), as: answer}],

[["exp_2_downleft_emoji_with", 2], q, {q: question_text("exp_2_downleft_emoji_with"), as: answer}],
[["exp_2_downleft_emoji_without", 2], q, {q: question_text("exp_2_downleft_emoji_without"), as: answer}],
[["exp_2_downleft_emotion_with", 2], q, {q: question_text("exp_2_downleft_emotion_with"), as: answer}],
[["exp_2_downleft_emotion_without", 2], q, {q: question_text("exp_2_downleft_emotion_without"), as: answer}],

[["exp_3_upleft_emoji_with", 3], q, {q: question_text("exp_3_upleft_emoji_with"), as: answer}],
[["exp_3_upleft_emoji_without", 3], q, {q: question_text("exp_3_upleft_emoji_without"), as: answer}],
[["exp_3_upleft_emotion_with", 3], q, {q: question_text("exp_3_upleft_emotion_with"), as: answer}],
[["exp_3_upleft_emotion_without", 3], q, {q: question_text("exp_3_upleft_emotion_without"), as: answer}],

[["exp_4_upright_emoji_with", 4], q, {q: question_text("exp_4_upright_emoji_with"), as: answer}],
[["exp_4_upright_emoji_without", 4], q, {q: question_text("exp_4_upright_emoji_without"), as: answer}],
[["exp_4_upright_emotion_with", 4], q, {q: question_text("exp_4_upright_emotion_with"), as: answer}],
[["exp_4_upright_emotion_without", 4], q, {q: question_text("exp_4_upright_emotion_without"), as: answer}],

[["exp_5_downleft_emoji_with", 5], q, {q: question_text("exp_5_downleft_emoji_with"), as: answer}],
[["exp_5_downleft_emoji_without", 5], q, {q: question_text("exp_5_downleft_emoji_without"), as: answer}],
[["exp_5_downleft_emotion_with", 5], q, {q: question_text("exp_5_downleft_emotion_with"), as: answer}],
[["exp_5_downleft_emotion_without", 5], q, {q: question_text("exp_5_downleft_emotion_without"), as: answer}],

[["exp_6_downright_emoji_with", 6], q, {q: question_text("exp_6_downright_emoji_with"), as: answer}],
[["exp_6_downright_emoji_without", 6], q, {q: question_text("exp_6_downright_emoji_without"), as: answer}],
[["exp_6_downright_emotion_with", 6], q, {q: question_text("exp_6_downright_emotion_with"), as: answer}],
[["exp_6_downright_emotion_without", 6], q, {q: question_text("exp_6_downright_emotion_without"), as: answer}],

[["exp_7_topright_emoji_with", 7], q, {q: question_text("exp_7_topright_emoji_with"), as: answer}],
[["exp_7_topright_emoji_without", 7], q, {q: question_text("exp_7_topright_emoji_without"), as: answer}],
[["exp_7_topright_emotion_with", 7], q, {q: question_text("exp_7_topright_emotion_with"), as: answer}],
[["exp_7_topright_emotion_without", 7], q, {q: question_text("exp_7_topright_emotion_without"), as: answer}],

[["exp_8_topleft_emoji_with", 8], q, {q: question_text("exp_8_topleft_emoji_with"), as: answer}],
[["exp_8_topleft_emoji_without", 8], q, {q: question_text("exp_8_topleft_emoji_without"), as: answer}],
[["exp_8_topleft_emotion_with", 8], q, {q: question_text("exp_8_topleft_emotion_with"), as: answer}],
[["exp_8_topleft_emotion_without", 8], q, {q: question_text("exp_8_topleft_emotion_without"), as: answer}],


["control-item1", q, {q: question_text("filler_1"), as: answer}],

["control-item2", q, {q: question_text("filler_2"), as: answer}],

["control-item3", q, {q: question_text("filler_3"), as: answer}],

["control-item4", q, {q: question_text("filler_4"), as: answer}],

["control-item5", q, {q: question_text("filler_5"), as: answer}],

["control-item6", q, {q: question_text("filler_6"), as: answer}],

["control-item7", q, {q: question_text("filler_7"), as: answer}],

["control-item8", q, {q: question_text("filler_8"), as: answer}],

["control-item9", q, {q: question_text("filler_9"), as: answer}],

["control-item10", q, {q: question_text("filler_10"), as: answer}],

["control-item11", q, {q: question_text("filler_11"), as: answer}],

["control-item12", q, {q: question_text("filler_12"), as: answer}]

];