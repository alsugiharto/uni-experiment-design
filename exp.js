
var shuffleSequence = seq("intro", sepWith("sep", seq("practice")), "startexp", sepWith("sep", rshuffle(startsWith("exp"), startsWith("control"))));

var practiceItemTypes = ["practice"];

var q = "Question";

var defaults = [ "Separator", { transfer: 1000, normalMessage: "Please wait for the next sentence.", errorMessage: "Wrong. Please wait for the next sentence." },
"Question", {hasCorrect: false, randomOrder: true, showNumbers: false}, "Message", { hideProgressBar: true } ];

var items = [ ["sep", "Separator", { }],

["intro", "Form", { html: { include: "example_intro.html" } }],

["startexp", "Message", {html: "This is the end of the practice session. The experiment begins now."}],
["practice", q, {q: "There are three practice items and this is the first one.",
                 as: ["There are three practice items and this is the starting one.", "There are seven practice items and this is the last one."], hasCorrect: 0,
                 instructions: "Select the best paraphrase of the sentence."}],
["practice", q, {q: "John is a bachelor.",
                 as: ["John is an unmarried man.", "John is a married man."], hasCorrect: 0,
                 instructions: "Select the best paraphrase of the sentence."}],
["practice", q, {q: "There are three practice items and this is the last one.",
                 as: ["There are three practice items and this is the final one.", "There are three practice items and this is the first one."], hasCorrect: 0,
                 instructions: "Select the best paraphrase of the sentence."}],


[["exp-each-nopred-item1", 1], q, {q: "A maid polished each mirror.", as: ["Each mirror was polished by a possibly different maid.", "All the mirrors were polished by the same maid."]}],
[["exp-every-nopred-item1", 1], q, {q: "A maid polished every mirror.", as: ["Each mirror was polished by a possibly different maid.", "All the mirrors were polished by the same maid."]}],
[["exp-each-respred-item1", 1], q, {q: "A maid polished each mirror spotless.", as: ["Each mirror was polished by a possibly different maid until it was spotless.", "All the mirrors were polished by the same maid until they were spotless."]}],
[["exp-every-respred-item1", 1], q, {q: "A maid polished every mirror spotless.", as: ["Each mirror was polished by a possibly different maid until it was spotless.", "All the mirrors were polished by the same maid until they were spotless."]}],

[["exp-each-nopred-item2", 2], q, {q: "A helper dyed each shirt.", as: ["Each shirt was dyed by a possibly different helper.", "All the shirts were dyed by the same helper."]}],
[["exp-every-nopred-item2", 2], q, {q: "A helper dyed every shirt.", as: ["Each shirt was dyed by a possibly different helper.", "All the shirts were dyed by the same helper."]}],
[["exp-each-respred-item2", 2], q, {q: "A helper dyed each shirt blue.", as: ["Each shirt was dyed by a possibly different helper until it was the color blue.", "All the shirts were dyed by the same helper until they were the color blue."]}],
[["exp-every-respred-item2", 2], q, {q: "A helper dyed every shirt blue.", as: ["Each shirt was dyed by a possibly different helper until it was the color blue.", "All the shirts were dyed by the same helper until they were the color blue."]}],

[["exp-each-nopred-item3", 3], q, {q: "A janitor dusted each bookcase.", as: ["Each bookcase was dusted by a possibly different janitor.", "All the bookcases were dusted by the same janitor."]}],
[["exp-every-nopred-item3", 3], q, {q: "A janitor dusted every bookcase.", as: ["Each bookcase was dusted by a possibly different janitor.", "All the bookcases were dusted by the same janitor."]}],
[["exp-each-respred-item3", 3], q, {q: "A janitor dusted each bookcase spotless.", as: ["Each bookcase was dusted by a possibly different janitor until it was spotless.", "All the bookcases were dusted by the same janitor until they were spotless."]}],
[["exp-every-respred-item3", 3], q, {q: "A janitor dusted every bookcase spotless.", as: ["Each bookcase was dusted by a possibly different janitor until it was spotless.", "All the bookcases were dusted by the same janitor until they were spotless."]}],

[["exp-each-nopred-item4", 4], q, {q: "A gardener pruned each bush.", as: ["Each bush was pruned by a possibly different gardener.", "All the bushes were pruned by the same gardener."]}],
[["exp-every-nopred-item4", 4], q, {q: "A gardener pruned every bush.", as: ["Each bush was pruned by a possibly different gardener.", "All the bushes were pruned by the same gardener."]}],
[["exp-each-respred-item4", 4], q, {q: "A gardener pruned each bush short.", as: ["Each bush was pruned by a possibly different gardener until it was short.", "All the bushes were pruned by the same gardener until they were short."]}],
[["exp-every-respred-item4", 4], q, {q: "A gardener pruned every bush short.", as: ["Each bush was pruned by a possibly different gardener until it was short.", "All the bushes were pruned by the same gardener until they were short."]}],

["control-item1", q, {q: "Only John was sick.", as: ["Nobody but John was sick.", "Everybody except John was sick."]}],

["control-item2", q, {q: "Each man drank a bottle of wine.", as: ["The men drank a bottle of wine each.", "The men drank a bottle of wine together."]}],

["control-item3", q, {q: "Each cook tasted a dessert.", as: ["The cooks tasted one dessert each.", "The cooks tasted one dessert together."]}],

["control-item4", q, {q: "The reviewers saw five movies in total.", as: ["The reviewers saw five movies each.", "The reviewers saw five movies together."]}],

["control-item5", q, {q: "Only one boy enjoyed the show on the beach.", as: ["Nobody but one boy enjoyed the show on the beach.", "Nobody enjoyed the show on the beach."]}],

["control-item6", q, {q: "Each elephant drank one bucket of water.", as: ["The elephants drank one bucket of water each.", "The elephants drank one bucket of water in total."]}]

];
