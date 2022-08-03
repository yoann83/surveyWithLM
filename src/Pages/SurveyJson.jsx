export const surveyJson = {
  pages: [
    {
      name: "question",
      navigationTitle: "Question",
      navigationDescription: "overload",
      elements: [
        {
          type: "image",
          name: "first_page_image",
          imageLink:
            "https://egerie-software.com/wp-content/themes/egerie/img/egerie-logo.svg"
        },
        {
          type: "panel",
          name: "question",
          title: "Question",
          elements: [
            {
              type: "text",
              inputType: "text",
              name: "textquestions",
              title: "Title Survey",
              defaultValue: "Valeur Default Survey",
              description: 'Description de Survey "title"',
              titleLocation: "hidden",
              isRequired: true
            },
            {
              type: "text",
              inputType: "number",
              name: "numberquestion",
              title: "Number  -> inputype: number",
              titleLocation: "hidden",
              isRequired: false,
              hideNumber: true
            },
            {
              type: "text",
              inputType: "comment",
              name: "textmultiquestions",
              title: "Multiline -> inputype : comment",
              titleLocation: "hidden",
              multiline: true,
              isRequired: true
            },
            {
              type: "dropdown",
              inputType: "dropdown",
              name: "selectquestions",
              state: { multiple: false },
              title: "Select",
              defaultValue: "Audi",
              hasNone: true,
              choices: ["Audi", "Peugeot", "Renault", "Volkswagen"],
              titleLocation: "hidden",
              isRequired: true
            },
            {
              type: "radiogroup",
              inputType: "radiogroup",
              name: "radiogroupquestions",
              title: "Radio",
              hasNone: true,
              choices: ["Kawazaki", "Honda", "Ducati", "Suzuki"],
              titleLocation: "hidden",
              isRequired: true
            },
            {
              type: "checkbox",
              inputType: "checkbox",
              name: "checkboxquestions",
              title: "Checkbox",
              hasNone: true,
              choices: [
                "Roadsters",
                "Cruisers",
                "Sportives",
                "Trial",
                "Supermotard"
              ],
              titleLocation: "hidden",
              isRequired: true
            },
            {
              type: "comment",
              inputType: "text",
              name: "comments",
              title: "Comments",
              defaultValue: "Valeur Default Survey",
              description: 'Description de Survey "comment"',
              titleLocation: "hidden",
              hideNumber: true
            },
            {
              type: "boolean",
              inputType: "boolean",
              name: "booleanquestion",
              title: "Boolean",
              labelTrue: "Mr.",
              labelFalse: "Mrs.",
              indent: 3,
              isRequired: false,
              hideNumber: true
            }
          ]
        }
      ]
    },
    {
      name: "widget",
      navigationTitle: "Widget",
      navigationDescription: "custom",
      elements: [
        {
          type: "image",
          name: "first_page_image",
          imageLink:
            "https://egerie-software.com/wp-content/themes/egerie/img/egerie-logo.svg"
        },
        {
          type: "panel",
          name: "widget",
          title: "Widget",
          elements: [
            {
              type: "metric",
              name: "metric",
              title: "Text",
              titleLocation: "hidden"
            }
          ]
        }
      ]
    }
  ],
  showProgressBar: "top",
  progressBarType: "buttons"
};
