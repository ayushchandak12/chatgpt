// 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
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-qg2eLzdIExwuaM3hJFer7HmI",
    apiKey:"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",
});
const openai = new OpenAIApi(configuration);
async function callApi(){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
      console.log(response.data.choices[0].text)
}

callApi();
