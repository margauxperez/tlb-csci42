// This javaScript file contains the questions, answer values, and assigned learning style type per question.

const questions = [{
        question: 'I can remember best by listening to a lecture that includes information, explanations and discussions.',
        answers: [{
                text: 'Seldom',
                value: 1,
                learningstyle: 'auditory'
            },
            {
                text: 'Sometimes',
                value: 3,
                learningstyle: 'auditory'
            },
            {
                text: 'Often',
                value: 5,
                learningstyle: 'auditory'
            }
        ]
    },
    {
        question: 'I prefer to see information written on the board and supplemented by visual aids and assigned readings.',
        answers: [{
                text: 'Seldom',
                value: 1,
                learningstyle: 'visual'
            },
            {
                text: 'Sometimes',
                value: 3,
                learningstyle: 'visual'
            },
            {
                text: 'Often',
                value: 5,
                learningstyle: 'visual'
            }
        ]

    // },
    // {
    //     question: 'I like to write things down or take notes for visual review.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'visual'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'visual'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'visual'
    //         }
    //     ]
    // },
    // {
    //     question: 'I prefer to use posters, models, or actual practice and other activities in class.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'tactile'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'tactile'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'tactile'
    //         }
    //     ]
    // },
    // {
    //     question: 'I require explanations of diagrams, graphs, or visual directions.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'auditory'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'auditory'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'auditory'
    //         }
    //     ]
    // },
    // {
    //     question: 'I enjoy working with my hands or making things.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'tactile'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'tactile'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'tactile'
    //         }
    //     ]
    // },
    // {
    //     question: 'I am skillful with and enjoy developing and making graphs and charts.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'visual'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'visual'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'visual'
    //         }
    //     ]
    // },
    // {
    //     question: 'I can tell if sounds match when presented with pairs of sounds.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'auditory'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'auditory'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'auditory'
    //         }
    //     ]
    // },
    // {
    //     question: 'I can remember best by writing things down.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'tactile'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'tactile'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'tactile'
    //         }
    //     ]
    // },
    // {
    //     question: 'I can easily understand and follow directions on a map.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'visual'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'visual'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'visual'
    //         }
    //     ]
    // },
    // {
    //     question: 'I do best in academic subjects by listening to lectures and tapes.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'auditory'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'auditory'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'auditory'
    //         }
    //     ]
    // },
    // {
    //     question: 'I play with coins or keys in my pocket.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'tactile'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'tactile'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'tactile'
    //         }
    //     ]
    // },
    // {
    //     question: 'I learn to spell better by repeating words out loud than by writing the words on paper.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'auditory'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'auditory'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'auditory'
    //         }
    //     ]
    // },
    // {
    //     question: 'I can understand a news article better by reading about it in a newspaper than by listening to a report about it on the radio.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'visual'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'visual'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'visual'
    //         }
    //     ]
    // },
    // {
    //     question: 'I chew gum or snack while studying.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'tactile'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'tactile'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'tactile'
    //         }
    //     ]
    // },
    // {
    //     question: 'I think the best way to remember something is to picture it in your head.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'visual'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'visual'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'visual'
    //         }
    //     ]
    // },
    // {
    //     question: 'I learn the spelling of words by “finger spelling” them.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'tactile'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'tactile'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'tactile'
    //         }
    //     ]

    // },
    // {
    //     question: 'I would rather listen to a good lecture or speech than read about the same material in a textbook.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'auditory'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'auditory'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'auditory'
    //         }
    //     ]
    // },
    // {
    //     question: 'I am good at working and solving jigsaw puzzles and mazes.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'visual'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'visual'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'visual'
    //         }
    //     ]
    // },
    // {
    //     question: 'I grip objects in my hands during learning periods.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'tactile'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'tactile'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'tactile'
    //         }
    //     ]
    // },
    // {
    //     question: 'I prefer listening to the news on the radio rather than reading the paper',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'auditory'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'auditory'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'auditory'
    //         }
    //     ]
    // },
    // {
    //     question: 'I prefer obtaining information about an interesting subject by reading about it.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'visual'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'visual'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'visual'
    //         }
    //     ]
    // },
    // {
    //     question: ' I feel very comfortable touching others, hugging, handshaking, etc.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'tactile'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'tactile'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'tactile'
    //         }
    //     ]
    // },
    // {
    //     question: 'I follow oral directions better than written ones.',
    //     answers: [{
    //             text: 'Seldom',
    //             value: 1,
    //             learningstyle: 'auditory'
    //         },
    //         {
    //             text: 'Sometimes',
    //             value: 3,
    //             learningstyle: 'auditory'
    //         },
    //         {
    //             text: 'Often',
    //             value: 5,
    //             learningstyle: 'auditory'
    //         }
    //     ]
    }

]