const EnglishMessage : Record<string , string> = {
    start: "\n⚽ Welcome to the epic match between {teamA} and {teamB}! Let's kick off!",
    action: "⏱️ {time}' | {playerName} ({role}) attempts to {action}!",
    goal: "💥 GOAL!!! {playerName} scores for {team}! {score}",
    save: "🧤 SPECTACULAR SAVE! {playerName} denies the goal!",
    end: "🏁 Full Time! {winner} wins the match! Final Score: {score}"
}

const HindiMessage : Record<string , string> = {
    start: "\n⚽ {teamA} और {teamB} के बीच मैच शुरू हो चुका है! स्वागत है आप सभी का!",
    action: "⏱️ {time}' | {playerName} ({role}) ने {action} करने की कोशिश की!",
    goal: "💥 गोल!!! {playerName} ने {team} के लिए शानदार गोल कर दिया! {score}",
    save: "🧤 बेहतरीन बचाव! {playerName} ने गोल होने से रोक लिया!",
    end: "🏁 मैच खत्म! {winner} ने यह मैच जीत लिया है! फाइनल स्कोर: {score}"
}

const GujaratiMessage : Record<string , string> = {
    start: "\n⚽ {teamA} અને {teamB} વચ્ચે મેચ શરૂ થઈ ગઈ છે! આપ સૌનું સ્વાગત છે!",
    action: "⏱️ {time}' | {playerName} ({role}) એ {action} કરવાનો પ્રયત્ન કર્યો!",
    goal: "💥 ગોલ!!! {playerName} એ {team} માટે શાનદાર ગોલ કર્યો! {score}",
    save: "🧤 અદભુત બચાવ! {playerName} એ ગોલ થતો અટકાવી લીધો!",
    end: "🏁 મેચ પૂરી! {winner} આ મેચ જીતી ગયું છે! ફાઇનલ સ્કોર: {score}"
}

export {EnglishMessage, GujaratiMessage, HindiMessage}