import { useState } from "react";
import env from "react-dotenv";

const ResponseState = () =>{
    const [responses, setResponses] = useState({
        num: 0,
        data: [],
    });

    const newResponse = async (prompt) => {
        console.log("prompt: ", prompt);

        const { Configuration, OpenAIApi } = require("openai");

        const configuration = new Configuration({
            apiKey: env.REACT_APP_OPENAI_SECRET,
        });
        const openai = new OpenAIApi(configuration);
        
        const response = await openai.createCompletion("text-curie-001", {
            prompt: prompt,
            temperature: 0.4,
            max_tokens: 64,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        let new_response = {
            "prompt": prompt,
            "ai_response": response.data.choices[0].text.replace('\n', '').replace('\n',''), // remove the first two newlines (\n) that the response generates
            "id": responses.num + 1,
        }
        responses.num = responses.num + 1;
        // old data concat with new data
        responses.data = responses.data.concat(new_response);
        // sort by new to old
        responses.data.sort((a, b) => (a.id > b.id) ? -1 : 1);
        console.log(responses.data);
        setResponses({...responses, num: responses.num, data: responses.data});
    }

    return {responses, newResponse}
}

export default ResponseState