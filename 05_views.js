// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  title: 'Welcome :)',
  text: `I hope this message finds you well.
            <br />
            <br />
            Know that your participation is highly appreciated.`,
  buttonText: `Let's start rotating!`
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions',
  title: 'All you need to know:',
  text: `Your task will be to judge for two 3d objects whether they are exactly the same or not.
            <br />
            Sounds easy, right?
            <br />
            Only problem: the two objects are not shown from the same angle. They are always rotated in respect to each other.
            <br />
            We will start with some practice trials to get you a feeling for the task.
            <br />
            Use the keys 'y' and 'n' to give your response. Press 'y' if you think the two objects shown are exactly the same, otherwise press 'n'.
            <br />
            Please try to be as fast and correct as possible.`,
  buttonText: 'Start the practice'
});

const main_begin = magpieViews.view_generator("begin", {
    trials: 1,
    name: 'main_begin',
    title: 'Start of main trials',
    text: 'Now that you had enough practice, let us start with the main trials. Again: Try to minimize your response time and error rate.',
    buttonText: 'Start the main trials'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results. Please do NOT enter any sensitive information! In the current state the collected information will not be secured sufficiently!'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

// Here, we initialize a normal forced_choice view
const key_press_choice_practice = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: key_press_trial_practice.length,
  // name should be identical to the variable name
  name: 'key_press_choice_practice',
  data: _.shuffle(key_press_trial_practice),
  pause: 250
});

const key_press_choice_main = magpieViews.view_generator("key_press", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: key_press_trial_main.length,
  // name should be identical to the variable name
  name: 'key_press_choice_main',
  data: _.shuffle(key_press_trial_main),
  pause: 250
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
