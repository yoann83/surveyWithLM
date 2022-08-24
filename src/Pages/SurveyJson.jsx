export const surveyJson = {
  pages: [
    {
      name: "mui",
      navigationTitle: "Question",
      navigationDescription: "overload - MUI",
      elements: [
        {
          type: "image",
          name: "first_page_image",
          imageLink:
            "https://egerie-software.com/wp-content/themes/egerie/img/egerie-logo.svg"
        },
        {
          type: "panel",
          name: "mui",
          title: "Material-UI",
          elements: [
            {
              type: "text",
              inputType: "text",
              name: "textquestions",
              title: "Title Survey",
              defaultValue: "Valeur Default Survey",
              description: 'Description de Survey "title"',
              titleLocation: "hidden",
              isRequired: false
            },
            {
              type: "text",
              inputType: "number",
              name: "numberquestion",
              title: "Number  -> inputype: number",
              titleLocation: "hidden",
              isRequired: false,
              hideNumber: false
            },
            {
              type: "text",
              inputType: "comment",
              name: "textmultiquestions",
              title: "Multiline -> inputype : comment",
              titleLocation: "hidden",
              multiline: true,
              isRequired: false
            },
            {
              type: "dropdown",
              inputType: "dropdown",
              name: "selectquestions",
              title: "Select",
              defaultValue: "Audi",
              hasNone: true,
              choices: ["Audi", "Peugeot", "Renault", "Volkswagen"],
              titleLocation: "hidden",
              isRequired: true
            },
            {
              type: "checkbox",
              name: "multidropdownquestions",
              title: "Multi-Select",
              state: { multiple: true, isdropdown: true },
              hasNone: true,
              choices: [
                "Roadsters",
                "Cruisers",
                "Sportives",
                "Trial",
                "Supermotard"
              ],
              titleLocation: "hidden",
              isRequired: false
            },
            {
              type: "radiogroup",
              inputType: "radiogroup",
              name: "radiogroupquestions",
              title: "Radio",
              hasNone: true,
              choices: ["Kawazaki", "Honda", "Ducati", "Suzuki"],
              titleLocation: "hidden",
              isRequired: false
            },
            {
              type: "checkbox",
              inputType: "checkbox",
              name: "checkboxquestions",
              title: "Checkbox",
              state: { multiple: true, isdropdown: true },
              hasNone: true,
              choices: [
                "Roadsters",
                "Cruisers",
                "Sportives",
                "Trial",
                "Supermotard"
              ],
              titleLocation: "hidden",
              isRequired: false
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
              name: "booleanquestion",
              title: "Boolean",
              defaultValue: "false",
              labelTrue: "Mr.",
              labelFalse: "Mrs.",
              titleLocation: "hidden",
              isRequired: false,
              hideNumber: true
            },
            {
              type: "imagepicker",
              name: "imagepickerquestion",
              title: "Image Picker",
              description: "Description de Survey imagePicker",
              titleLocation: "hidden",
              defaultValue: {
                title: "CYBERSECURITY 2022",
                author: "@egerie",
                loading: "lazy",
                position: "top",
                icon: "fab fa-audible",
                value: "cybersecurity",
                imageLink:
                  "https://egerie.eu/wp-content/uploads/2022/04/shutterstock_1450239362-3-scaled.jpg"
              },
              choices: [
                {
                  value: "cybersecurity",
                  imageLink:
                    "https://egerie.eu/wp-content/uploads/2022/04/shutterstock_1450239362-3-scaled.jpg"
                },
                {
                  value: "cyberrisques",
                  imageLink:
                    "https://egerie.eu/wp-content/uploads/2022/01/Banniere-Quantification-financiere-site-internet.png"
                },
                {
                  value: "riskmanager",
                  imageLink:
                    "https://egerie.eu/wp-content/uploads/2021/12/Banniere-Fonctionnalites-V4.0.png"
                }
              ],
              state: {
                attrs: [
                  {
                    title: "CYBERSECURITY 2022",
                    author: "@egerie",
                    loading: "lazy",
                    position: "top",
                    icon: "fab fa-audible"
                  },
                  {
                    title: "Cyber-risques",
                    author: "@egerie",
                    loading: "lazy",
                    position: "bottom"
                  },
                  {
                    title: "RISK MANAGER",
                    author: "@egerie",
                    loading: "lazy",
                    position: "below",
                    icon: "fa fa-id-card"
                  }
                ]
              }
            }
          ]
        }
      ]
    },
    {
      name: "survey",
      navigationTitle: "Question",
      navigationDescription: "Overload - Survey",
      elements: [
        {
          type: "image",
          name: "first_page_image",
          imageLink:
            "https://egerie-software.com/wp-content/themes/egerie/img/egerie-logo.svg"
        },
        {
          type: "panel",
          name: "survey",
          title: "Survey",
          elements: [
            {
              type: "ranking",
              name: "ranking",
              title: "test",
              description: "Ranking Survey",
              descriptionLocation: "underInput",
              choices: [
                "Vulnerability n°1",
                "Vulnerability n°2",
                "Vulnerability n°3"
              ],
              choicesOrder: "asc",
              separateSpecialChoices: true,
              titleLocation: "hidden",
              readOnly: false,
              isRequired: false,
              hideNumber: true
            },
            {
              type: "signaturepad",
              name: "signaturepad",
              title: "Signature",
              visible: true,
              penColor: "#ff5900",
              titleLocation: "hidden",
              description: "Consent Survey",
              descriptionLocation: "underInput",
              isRequired: false,
              hideNumber: true
            }
          ]
        }
      ]
    },
    {
      name: "egerie",
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
          name: "egerie",
          title: "Egerie",
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
