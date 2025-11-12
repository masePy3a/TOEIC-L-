// quiz-data.js
// TOEIC L495 Listening Comprehension - Implicit Meaning & Speaker's Purpose
// クイズデータをここで一元管理します
// 新しい問題を追加したい場合は、以下の配列に JSON オブジェクトを追加してください

const externalQuizData = [
{
// L495戦略 B: 機能表現と意図の推測
"question": "A: 'The proposal is due tomorrow, but I haven't even finished the data analysis.' B: **'I'd be happy to** stay late and help you with the final review.' What does B imply by saying 'I'd be happy to'?",
"options": ["B is complaining about the delay in data analysis.", "B is suggesting to postpone the deadline.", "B is offering to help and showing willingness to stay late."],
"answerIndex": 2,
"hint": "Focus on the phrase 'I'd be happy to' - it expresses enthusiasm and willingness to help."
},
{
// L495戦略 B: 機能表現と状況の推測
"question": "A: 'I tried calling the customer support line, but I was on hold for over thirty minutes.' B: **'Unfortunately,** our call center has been overwhelmed since the software update.' What does B's use of 'Unfortunately' imply?",
"options": ["B guarantees that calls will connect immediately.", "B is expressing regret about the current problem situation.", "B is happy that the software update is complete."],
"answerIndex": 1,
"hint": "The word 'Unfortunately' shows B's regret and acknowledgment of a problem."
},
{
// L495戦略 B: 代替案の提示
"question": "A: 'The 9:00 train to the city is canceled due to heavy rain.' B: 'Oh no. **Is there any other way** to get there before noon?' What is B asking for?",
"options": ["B wants to wait until the rain stops.", "B wants to know the reason for the train delay.", "B is asking for alternative transportation options."],
"answerIndex": 2,
"hint": "B's question 'Is there any other way' indicates he is looking for alternatives."
},
{
// L495 Part 3: 提案と了承
"question": "A: 'The quarterly budget report is quite complex. We need to present it to the board next week.' B: **'Why don't we** prepare a summary first to make it easier to understand?' What does B suggest?",
"options": ["B is criticizing the complexity of the report.", "B is proposing to create a summary.", "B is suggesting canceling the board meeting."],
"answerIndex": 1,
"hint": "'Why don't we...' is a polite way to make a suggestion or proposal."
},
{
// L495 Part 3: 可能性の表現
"question": "A: 'I might not be able to attend the conference in Tokyo next month.' B: **'As a matter of fact,** we're planning to hold it virtually this year.' What does B's response imply?",
"options": ["The conference will be delayed.", "The format has changed to virtual, so attendance is now possible.", "The conference will definitely be held in Tokyo."],
"answerIndex": 1,
"hint": "B is providing new information that changes the situation - it's now virtual."
},
{
// L495 Part 3: 理由の説明
"question": "A: 'Why are you leaving the company?' B: **'To be honest,** the job didn't match my career goals anymore.' What does B emphasize by saying 'To be honest'?",
"options": ["B is unhappy with company policies.", "B's resignation was unintentional.", "B is emphasizing the sincerity and candor of the statement."],
"answerIndex": 2,
"hint": "'To be honest' signals that the speaker is being truthful and direct."
},
{
// L495 Part 3: 丁寧な拒絶
"question": "A: 'Would you mind working overtime this Friday?' B: **'I appreciate the offer, but** I've already made prior commitments.' What is B doing?",
"options": ["B is accepting the offer without hesitation.", "B is politely declining the offer.", "B is confirming he will work on Friday."],
"answerIndex": 1,
"hint": "The phrase 'I appreciate...but' is a polite way to reject a request."
},
{
// L495 Part 3: 情報の追加説明
"question": "A: 'The new marketing campaign didn't perform as well as we expected.' B: **'In addition to that,** the advertising budget was higher than usual.' What is B doing?",
"options": ["B is agreeing with A and providing additional information.", "B is correcting A's conclusion.", "B is emphasizing the importance of marketing."],
"answerIndex": 0,
"hint": "'In addition to that' means B is adding more relevant information to the discussion."
},
{
// L495 Part 3: 確認と同意
"question": "A: 'So you think the project deadline needs to be extended, right?' B: **'Exactly,** that's precisely what I'm suggesting.' What does B's response indicate?",
"options": ["B disagrees with A.", "B's understanding matches A's, and B agrees.", "The project is proceeding on schedule."],
"answerIndex": 1,
"hint": "'Exactly' and 'precisely' show B's agreement and confirmation."
},
{
// L495 Part 3: 理解の確認と調整
"question": "A: 'Let me make sure I understand. You want the data by Friday, correct?' B: **'Actually, we need it by Wednesday** if possible.' What does B indicate?",
"options": ["Friday is acceptable for submission.", "An earlier deadline is preferred.", "Data is not needed."],
"answerIndex": 1,
"hint": "'Actually' signals a correction or adjustment to what was just said."
},
{
// L495 Part 3: 感謝と丁重な対応
"question": "A: 'I've prepared all the documents you requested.' B: **'That's very kind of you.** We really appreciate your effort.' What is B's purpose?",
"options": ["B is dissatisfied with the documents.", "B is expressing appreciation and gratitude.", "B is asking for document revisions."],
"answerIndex": 1,
"hint": "'That's very kind of you' and 'We appreciate' express thanks and recognition."
},
{
// L495 Part 3: 制限と条件
"question": "A: 'Can we increase our marketing spend next quarter?' B: **'Well, it depends on** the revenue forecast and board approval.' What is B communicating?",
"options": ["Marketing budget increase is confirmed.", "The increase is conditional on multiple factors.", "Marketing is not necessary."],
"answerIndex": 1,
"hint": "'It depends on' indicates there are conditions that must be met first."
},
{
// L495 Part 3: 懸念事項と提案
"question": "A: 'Some team members are struggling with the new software.' B: **'Point taken.** We should provide additional training sessions.' What is B's response?",
"options": ["B is dismissing A's concern.", "B is acknowledging the issue and proposing a solution.", "Training is unnecessary."],
"answerIndex": 1,
"hint": "'Point taken' means B acknowledges the concern and is responding constructively."
},
{
// 暗示的な同意と謙虚さ
"question": "A: 'Your presentation was very impressive.' B: **'Oh, I just happened to prepare it well this time.'** What emotion does B's response imply?",
"options": ["B is directly accepting the compliment.", "B is hinting that success was due to luck this time.", "B admits the presentation was generally poor."],
"answerIndex": 1,
"hint": "B uses 'just happened' and 'this time' to suggest luck rather than skill."
},
{
// 丁寧な拒否と理由の暗示
"question": "A: 'Can you attend the meeting on Friday?' B: **'I'd love to, but** I have a prior commitment that day.' What does B imply?",
"options": ["The meeting is more important than the other commitment.", "B cannot attend under any circumstances.", "B has something more important scheduled for that day."],
"answerIndex": 2,
"hint": "'I'd love to, but' + a prior commitment suggests something else takes priority."
},
{
// 質問を通じた暗示的な指摘
"question": "A: 'We've been working on this project for six months without progress.' B: **'Have you considered changing your approach?'** What does B imply?",
"options": ["The current method may be problematic.", "The project should be discontinued.", "The entire team needs to be replaced."],
"answerIndex": 0,
"hint": "Asking 'Have you considered changing...?' is a polite way to suggest the current approach isn't working."
},
{
// 予約的な表現による暗示的な拒否
"question": "A: 'I'm thinking of proposing a new budget plan to the director.' B: **'Well, you might want to reconsider** given the current market situation.' What does B imply?",
"options": ["The timing is bad and the proposal might not be accepted.", "The budget plan will definitely be approved.", "Market conditions will improve indefinitely."],
"answerIndex": 0,
"hint": "'You might want to reconsider' suggests the current timing is not favorable."
},
{
// 強調による話者の本心
"question": "A: 'The new supplier seems reliable.' B: **'Seems is exactly the right word—** we don't have enough data yet.' What is B emphasizing?",
"options": ["The supplier is completely trustworthy.", "Reliability is uncertain and judgment should be postponed.", "We have sufficient data to trust the supplier."],
"answerIndex": 1,
"hint": "B emphasizes 'seems' to indicate uncertainty - we need more information."
},
{
// 皮肉を通じた暗示的な評価
"question": "A: 'I finished the project one day before the deadline.' B: **'Wow, how impressive! You always manage to do that.'** What is B's true intent?",
"options": ["B is genuinely praising the early completion.", "B is sarcastically pointing out that last-minute delivery is habitual.", "Early completion is rare and praiseworthy."],
"answerIndex": 1,
"hint": "'You always manage to do that' with sarcasm suggests a pattern of cutting it close."
},
{
// 曖昧な表現による謙虚さと不確実性
"question": "A: 'Do you think our company will expand to Europe?' B: **'It's possible, I suppose.'** What does B's tone indicate?",
"options": ["B is confident about European expansion.", "B is uncertain and doubtful about the possibility.", "European expansion should be avoided."],
"answerIndex": 1,
"hint": "'I suppose' is a hedging phrase indicating low confidence or doubt."
},
{
// 限定的な褒め言葉における暗示
"question": "A: 'How did you find the restaurant?' B: **'The service was adequate, and the food wasn't bad.'** What does B imply?",
"options": ["The restaurant was excellent.", "The restaurant was mediocre and not particularly satisfying.", "Both service and food were exceptional."],
"answerIndex": 1,
"hint": "'Adequate' and 'wasn't bad' are weak praise - implying mediocrity, not excellence."
},
{
// 疑問形を通じた反対意見の表明
"question": "A: 'We should hire more staff immediately.' B: **'Don't you think we should analyze the budget first?'** What does B imply?",
"options": ["Immediate hiring should proceed.", "Hiring without budget analysis could be problematic.", "Current budget is completely sufficient."],
"answerIndex": 1,
"hint": "Framing disagreement as a question is a polite way to suggest caution."
},
{
// 付加疑問による軽い反論と同意への促し
"question": "A: 'Remote work has been very productive for our team.' B: **'It has been, hasn't it?** Though some people do struggle with isolation.' What is B's intent?",
"options": ["Remote work is completely successful for everyone.", "Remote work is generally successful but has individual challenges.", "Remote work has failed."],
"answerIndex": 1,
"hint": "B agrees but then adds 'though' to introduce a qualifying concern."
},
// ========== PART 4: 長文リスニング理解（5問） ==========
{
// PART 4: 長文 - スピーカーの主な目的
"question": "**[Long passage audio transcript]: 'Good morning everyone. Thank you for joining today's training session on our new customer database system. Over the next three hours, we'll cover the basic functions, data entry procedures, and security protocols. We strongly encourage you to take notes and ask questions whenever something is unclear. By the end of the day, everyone should feel comfortable using the system independently. If you have any technical issues, our IT support team will be available in the back of the room.'** What is the speaker's primary purpose?",
"options": ["To announce the company's new customer database system launch date.", "To introduce and conduct a training session on the customer database system.", "To warn employees about potential security risks in the system."],
"answerIndex": 1,
"hint": "The speaker mentions what will be covered and encourages participation - this indicates the primary purpose is to conduct training."
},
{
// PART 4: 長文 - 詳細情報の理解
"question": "[Reference the above passage] How long will the training session last?",
"options": ["One hour.", "Two hours.", "Three hours."],
"answerIndex": 2,
"hint": "Listen for the specific time mentioned when describing the training duration."
},
{
// PART 4: 長文 - 推論（何が求められているか）
"question": "[Reference the above passage] What is the speaker implying by saying 'everyone should feel comfortable using the system independently'?",
"options": ["Participants will not receive any support after today.", "Participants are expected to master the system well enough to use it without assistance.", "The system is so simple that no training is really necessary."],
"answerIndex": 1,
"hint": "The phrase 'feel comfortable using independently' suggests the goal is for people to work without ongoing help."
},
{
// PART 4: 長文 - 新しい文脈での理解
"question": "**[Second passage]: 'We're excited to announce our company's expansion into the Southeast Asia market next quarter. Our research team has identified strong demand for our products in this region, and local partnerships are already in progress. The marketing team will launch a targeted campaign in January, focusing on digital media and local influencers. We're aiming for a 15% market share within the first two years. Additional resources have been allocated to the regional office to ensure success. We expect this expansion to significantly boost our annual revenue.'** According to the announcement, when will the marketing campaign begin?",
"options": ["This quarter.", "Next quarter.", "January."],
"answerIndex": 2,
"hint": "Look for the specific month mentioned in relation to the marketing campaign launch."
},
{
// PART 4: 長文 - 複数の情報を統合
"question": "[Reference the Southeast Asia passage] What does the company expect to achieve from this expansion within two years?",
"options": ["Establish local partnerships only.", "Achieve a 15% market share in the region.", "Double the company's current annual revenue."],
"answerIndex": 1,
"hint": "The speaker explicitly states a specific market share target. Listen for the exact percentage mentioned."
}
// ★ ここに新しいクイズをJSONオブジェクト形式で追加してください ★
// テンプレート:
// {
//   "question": "問題文（英語）",
//   "options": ["Option A", "Option B", "Option C"],
//   "answerIndex": 0, // 0=A, 1=B, 2=C
//   "hint": "ヒントテキスト"
// },
];
