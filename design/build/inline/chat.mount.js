/* Собрано tools/inline_mock.py из design/build/chat.html — руками не править.
   Мок остаётся рабочей отдельной страницей; компонент пересобирается из него. */
window.mountMock_chat = function (__R, __P) {
  // Параметры мока (?hold, ?seg=read, ?book=0, ?loop) читаются из location.search.
  // Подменяем location, чтобы не трогать разбор внутри мока.
  const location = { search: (__P && __P.search) || '' };

const ICONS = {"status": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAfCAYAAAB3cVZEAAAJnUlEQVR42u1cB3BURRjeuyQgEIpAQASkBQFBpYsjCoIKKCo2mqAYioiKZayADSwojDooiAiICFJkBKRIEUFAaSpCkA6C9B5DTXLJ+f/e9ybrsu/dhbxywfwz31zu3b59+3a//dvuxi+iT4oRaihIEPnyvxZ/lLWnFGEqYbOC9YRq+cMV8ZiWJVQn1CM0IDQiXEdoQrjeJTTBMxsTGqIddQhXEIrmdaLyS7UinJSunSZcRmjrYjuKYrDbEd4mfEn4ljCH8B1hLmEW4SvCEEJnQgVYA68kllCfkER4CHiY8IiCJJfRDc/tJrUrCX1bLq8S1S8RxZAiLrW1ACZKH8JewkHCdMLLhC6EOwm3E1oT2mDidCI8R5hI2EP4m/Ai4QZCvIv9lgAC3EOoQkgn/IFJNY0wmTCBMI4wxgKjCZ8RRuHzQjEKdX2OvplE+JqwjLAPfdMYhL0pWohamPA0YTDhHWiot2CaVPFZ1ONzqH0FCe0xmKsIw3OpGfk9lxNmYiCc1rKlMZGqEo7CdRqD95lPWEJYijatIKy0AL//asIafF4ojPu5zp/w7KWwQkzcT/G7HxP/1mgg6iuED6BpXoKG6kf4nlDCYw3eHJ05BdrITmkBwuwg3AXT7IS5bwvffiNhPGEd4RShELTrlYSahFoW4N8TXQpa0zGhZhBmE04QmhGu8ZqoLTTXAnCq4x3WlmbC/ueHhMWEui5ovJkwf1VsrrsuLNNWuCkncL0NNOtOwhbCJhDZDPz7NsJCQk9YGTdkLWEeIYPQFNbXdqKWVFDEpFymiSZgCXqgRblDdhOeirD8cgRNI+C6vAbX5WP4fYsirOd+EKedje9SG33Jvt9ZXHsUwd6FBJ/Xwr8c5iJZk5HZqQblZRtR/TDjxxRsgJmJBr/TTNphUMMNAvt3HZFmYf/pQcLjcFkGEgYQniR0RZaCUy/3wb8NJ9NBJjtSeSUR9KXgWkvCSBvq7kXo6+K4cICVRigfKVFjFOikJgIGVSpj8Lwmo5k0A0msZBi0VDf4rey/nrN4Bx8sxm+Eb6ClE6F1rWQkUlq5kXj4+McJqYQ4EMzO2KKSS2NzFO5gQjiiJsCHOoeXPga/IcnCbJtF+NEqW6FNdcKmsh6IthGzW5agksYSJq5LJoKngfAdx5o87xDInRspBLKm4rklkb2wS4pC+bghKXiH4pJS8OmI2hemLhZkM24YI0VjkWhGXxQT9QDSONuU630Q8f9ukrrizAAnzntAU34CH7UXNG9roV9p2U7oTuig+e02+GW5kQIg6yl8j3ModeeGnAJRC0sculfW6AZRi2tuDmo0SF4mKstfIpS034PvN4N46UrbqyIr8DMyA+NEKJH9OqwM+6qcC+SENifVV0B76lIsUxGkGP3Jy4rrbXiXOIxfhoMZHLcWhLj/s/BOxoRLhPuRIDfE5yDpglFG1u3Qkpw/XKK0swK05Q64AfVzEH3zMuE6EFgNKtfDjF4tQoluOyQGg5vlYF+5qXgylcnBS+dlCLeEI2pefNlIZafG9LaCpu1nQ8S8BZkCVZtvsHlg/XnAiuVk4glp4vF33vPBG1n8foXNuRXd7A7kQNsGPdLMj4lQ4tlO4Rzrmw75jjJR/RcBSX14j6DERR++/+u3+pVI/rR08/EwGjFF+vusMiuEJkoOaMr7TLTvUc1zYhzqJDYvIyIox9qQd1HxXoXREZhwnrT9hT63bIfEYlAzLwKiGgT1if8uBvnAhSyDqAvxKa8ucbqDV3D2KhqNo2femVNCSZUYaR5VxmvSWlx+tjQZglIKiaW0VNZ4ziqHOukwgiqdcB6Vd0hxcr0xovj+0MDNEYS2RUClC0Q6oa+ckItBk+qssU+yGGWgEILGy87AYHWBb9UZn81BTFmOiNBaslyO72uJCFcVXq25A+WMezoi+DijlGWiXoX65Lp5E+4yBztpCdooC7ePFwkmY0KdlSLsAL5zDnMOMgnqppaeuNcpCYCsMQ5rOrdMfyyeF5AyUXONgNevDBZvweJ17Un43GVS8R6lHN/3g8XLzkU5454pinmXZZPI3sNo1L3Khc7iNt5N+BPR+TikTSIVnuyc9+Ntbb3hHjgpGUBBm+MMXSTutFyCCZcuPXMulFzGxWg+ciu8i7+qJjrn3VY3EgaJUL70PRHaA1BBU0dTpKicljTEFMZiwzkHnnHSpX4vBi6elFyAtbKiyCdqeOFVKd74wRt/B8AleJ6wAJblGZGzRRG75AwGtjg0Ei97D7Gx/l+kmMFpKQGNmhLOIS+MVMp8kX0maIEw3yrWCr8bZ4j4vneFfimRn8H7MHnVhtfTeZWmpjDfFsiBVG2Uq4c82uUekXQgXAAreR/ZALclFQPLAYexr3esjfW/IQW7TksZuDCHwhG1N6JZXoM2zgSxaeOjAzWUe9g0zsPvxhkivu8Fod89VQkojg41Ds5V16SniuB6KZgDLn+pCO1VLOkBGY5EWG6fR0Q9BG1kuCC8iNHIhro7IyvjhsRCkWWK7KVtU6Lqdp4b/kFRJW0QLznzqiSa+B8BIBM+SDrqUU1mYVzLENk5wgCe7cUJz49E+C17YzDJvZBf4afyKYqKkslm4j4hQmlHIz22FxNqP7BPZKcet8K1GQTLN8nFd2gJ5ZcstceUqDoJ53fF5WDG+DTaU7f8F2PSJqfTMFbCCf6hJr/xycpnRfYChtvCS8ErYYEegJtkaPjhsHR1YNEqgsDlgQq4VglWk1Nxr4IwbgVQnNJrAuuwWFjsW8gPpsJLAEHUKHw3Vu/mw2VK9bh9rDXXwTVisrYD8cp6FORZca0YJkdDBKkN0L+c2jsQ7mYWXWI33K6cYITXAia/ZQn9xuMsk7YEPOzkNET3E+BHr0BHH48CAnDf8Nn9RcgCcBqNj8jwOX/eQ9sTSBLZ/wjCLSRJbeiB53O7OiKA2oE+3RwJywVSG2a/nVOIlqb4rLLokvinUTZGMvdxMJcBDSECkrtgmPygh+ZVTgfxBnNeKWtvFaF6RFY2nV+I0InXZPRXaZh249h0LbgCbqEGAmHD9SgIzfmjCC36cLZkd6Tq2AgaxsLJNnyfg5iZavKbt7B1QNmdeNB+zAxdHm8X6jqLIIrJyMd6t4nzVz5SMctOSmVPo47DUUAIbvdEK6ffYzmCoGgaxnMY0mdDMTa8UDHYRQzBs7kN/L8dRqL/ZoFXEVtJg6hswrrDya6EWVAO5NPJVJTlcpXxd1cTjRpAVMkR6mpEpckWvh2Tmo+FrAHWWqUt8kUrmbAAKRjb47CaRz3AMakNqeL882gRyT8wP7TVt2302QAAAABJRU5ErkJggg==", "library": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABACAYAAAC9S+EXAAAClUlEQVR4AeyaTU7EMAyFI07FBgmBuBMCsUIgJI7Ej1hyLPIWrWZSv8ZpnJb8oJo2HteJv+Y105m5cONPRWCAUmFyboAaoJQElGFjRg1QSgLKsFIz6sr3P5k/LL49+x5g135fZLMGBTi/fqTvJ4YCfLPIhtzo785nh735fZHNGhQAhQNFAaHPqi3lBjyr/HMea1Bz4gMPJHjZw6kd1Ec2AWWC2kGxMs3l919AYbWajBUv+Z8kp/eZy+9oUICDVQur1WTms8GDc87l/T8aFOCEFaTOBnafMgV+NKgQ0pb2LvJrAdQWuMnntAKquPy0oPBoMlny1djhBCY/s65joAAHqxIeTSYzvUmaVSInSl0Y5CzeGwMFOD7sbDPr/CxrfqOo/GKg8oe/X4ai8msJFLskJgpoDRSTH4Oo9rcG6otUnr0AtQbqh4DKll9roMCpiPyqAgUKGZYlvxZBsbcJWfJrEVTGpOOn1goKH/hNJlXHVr8XKVjjqw0U4ODZEx/4TSYV/0iKvyX+qLs2UIATFrW5+DDRWrs2UGu1hK8x+b2GgZp2y6CY/G40YMKYlkGFtWa1Wwf1Tegky691UA8EVLK7dVAMSPJ9qgdQTH4MoujvAdSnWLlzSfepnUGRIZd1sxmVJL8eQOEyMFh4TWW9gGIw1PLrBRR7m6CWXy+g2IxS+3sCxe5TKvn1BCpLfj2BUstMCuwN1Gb59QZqs/x6AyWpSuXrEZQkPzbTZogxUNLX0/fz2csDKX5tEKmDTo1fjtA5jAeGXLBLH4S93/EtBgrfuiLRqbEfQqAXKX5tEBjwaW4cW8ZjTJKhD/QNk15f+GKgFif06higlFd+gBqglASUYWNGDVBKAsqwMaMGKCUBZdiYUUpQfwAAAP//ODBKZgAAAAZJREFUAwC2KUeBnGBtMwAAAABJRU5ErkJggg==", "practice": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABECAYAAAAWVrIgAAAFL0lEQVR4AeyZ227UQAxACz/FEwIJxBchkEA8IZBAfBEXCcQTf8Wcal1NvXbG40myyTYo7iSOryeebLc8vjn+DRHYKsCnpSstRbW945IAPxYcyL+yavlWdFq0Db5ALqaXO9YGSNMC4lVpGylL6sAXyMQj7kVgrgGQ5mgSoekUrYYTcS8Cc0mAAo7mGv3Pept8AnPxqVwCYA+47wXd65M8KWtExB7f4jJ5AHJRiHMCpNDINqVxAfWhtP/3JGUJHWKPL3EEqOcMROqiPs8mrZ8LIFNHoV4hGppnl9EL0BZM6qPOTA7XZw6AFMV7x0oi4JgW6/7cOoHJVFqxqZNptO6ldCMAn5WMFENR5fTsYCLWAqeTA5L8Hkjq1j6p6yxA4H11Mv4seoovy8UPAfnGqASI9GHciquyAD14gHsfT7+a5Z+SSSCW07vD6+POoHWSAciTs+ICz9JvRedB9PoJ1d0L0Bv5rcMTGB7ET2LQu/YABJ418tbW6K1jTXsL4stSAP2Vpe/oAejBo6C+rJe3pmY+7OpKrP7q++Z5FKD1dJg8CjED70Bpfdh1vw+jAK2ns2d48nyH390RgN70SRF7X/VW7vpAiQC81umTB6+3Mh8ocq+5tgBe+/R5gMJT2AJoJbiGd5/uS2/j8BRmAOrk13Ctt3G4pxZA/ZcW/aTCiXZgqHuzXl9nbbQA6lH+cRZhFcVFkujhMYtoATSdOpWfiz3yvKw9By9yJDQJp8DYIz0+J9ebR3JyWvX1SX1/6QX4+7578wpwL4oV8qWsXJdl8gA03wiYfoRfo9BNOpWbxMYewYfrog4f/PW8Nqbm+to87wVoBnGUNK2L0NeWq7V1LF3tm81Vx+gdjlvfXoAUeusY+OEV1BND0rTAz5lLcobWFsBfKkprEpS5eek1K8Z6K6F/y4+EtHLVITMP9qYFsE6QOa+/rPMw6msvHk3XwDhH59mLvo4dzSW+6bUXYGsrWYXQGPLOuunoAIYPwrljdqbGHunJJUH07uIhyD13bQG0Cun9dHOTb+yGHg7rVXJWcgvgmUNR6ERF9XCPCEBrlK9tClMfIIxNBKC1jZnCdFISb0z4JV+XFHr3RgAS2JpCkl4DRKsHPvnpuylRgNYUEtyHyN19CD3oSkPTh1MUILbeU6EA6ynis3Wx6vb6NHvpAchTsbYygfcIEXjUTf210Gd9PXneA5BA3lbmHsVQFOd7EOrVdXZNH869APGZSkJRe4DIn8vopRb66po+nDMASUIy/C0BoqXfis6CR230xdolGYAkINkURGy2KB48vj+n6s0CJNmeIPJa8eANDcIIQIHofTJzfwsCOO+1AjwGIV3nKMB04hUc+b4OPC8V23YIHoHnAMj3YmKJXHoiBZyuq64PeHI9tM4BcKiAmZwFGhPngSMVW3bqd1lsumQUIC9nnbD1h8i6Wc6Jgeg43jW2CL4AQ6agEYddwdQNb1mC1XIPYH1j4NwrUhqum+WcFzwCiIhgi+DbKlPAzTp1ddJRgDRSx2OL1Nf1pEQarn1HzhcHJ8WNAGSiJI6s/McMeoRpAvBa4AQaW3WxiZNGZc0CZLIsMOhEJIe10izTymrdj+rwBxiyGrS6uCxAJquOEz2XhmmWdyUrzSMA1YK96LDRgn809yJ2WYC9xQCC5qcaBqgW7EXXm3MV+yUBCrQWuFUaXSpJFiDbSmoClAiwRJgesbnaNQuQbVWDAhZytaC8xrIAvXgPTn8AHHzkB8AD4BiBUe9jAgcJHgAPgIMEBt2PCRwE+B8AAP//9ueEEgAAAAZJREFUAwBS2+WJ4ddKuwAAAABJRU5ErkJggg==", "mywords": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABECAYAAAAFgfLUAAAEdklEQVR4Aeya0arUMBCGq8+kN4IoIvo8oqio1yKi+DiiqCheCT6RIDrf8WQ3/qTtNsm0TbeS/7SZJJOZr9Nuz1mvdtv/d9NS/Cl6af1Z2tYBA/ddguS9hM3FtHXAQ9BmqeKtA9bq/RgRn6WKtwz4VgST0wf2470pbu5VvGXAb2OSdv79UnY4NPcq3ipgrd6HB6RdFz8mMOtcbNW0VcBavTGwZ3HHzu+b3NoWAacq8psQjKvY9TGxJcCARVq98eMhcNYq5hcR1gaFecXH1gDzqQ+MlACLFIpWr46HPmuDUv6z4LcCmORI+qTbORCzY6p6zXzR4sfEhWHkR4BPLCNTj8OtACa5Y9SnnQFwqHp5TDDnNG/HWZNiaQXwMb3jGXCCHpkZXbNjEACtO9iYw3zWxgp+BxefMtgqYGAAJ+irJYvskNVYGyv4DfCznLKoFcBUFPEGvbGT2ybvxh7slb1PK4CpKE2SxAGg9lp9fLOH+uPuUVtvvxXAJJBKDACAYLym8Ilv9ckjg0eJ2nv7pYB5L0W8QnkrlTCJYScGzmsIX/hUX8BV22g/FzBXGKC8l6LRjZwnEANgSrfBB75iPzz/s+DiJAcwcFNXGH9LCjAAyo2BvPARrwdu6vkfzxk8zwE86HDhQQU0JRwtGp75RXDZPAewBsJV5hZaSuxPLrU16cOsb/McwOrrIkE1ztgvqVr3MGsArnKlK2VacrFL1vaGXwNwr/MZBu7IHp+kP6Wra9X3FF+HuR6AX5n3WjJX1RoxAQ2lnH4RY5VHjwfguxZoLfXBsC0umkJQSEwCLO/sxPTaDGjMr03rmM+xSB6AiwKauHgIAhADWHULZMaYE4/pYyIeyzpvGbDCeRwRoGqBGJmSp8xhbnKwhtEDMInWUuqWH8ob6FTmUGXreuayhrVPZbAYvgdgoNSS5DvYpRqRTuK2R2rXPmsBrfaivgfgooAqL+ZO0qpkC4AzxvmQit+NWwbMXdIHB4D86j40hzHmnAK6b59Re8uASe4JP0TYUlUr0w5dQLPmYLg8edJ1HWOX3bxD64A/W9pUIYA4ImxmntRYw9pY2CY5SU1uHXDIqQqM4Kzm0QMwrzZLqyajIl8egHmvXFpFUGou9gBcM77mfU0FfCWRccqWmHaepqmAT6F03SYtLQthHc0D8B9LbWlZCOtoHoDXkdlKojgXwPo5oX23y+EBeOlXNPafDeDYlfEAXPZLRtfVWD+W92zjHoBnC76FjXbAzldpKuDUfLXxJ76lpTE5Y+x37xEIf8BeWr8lZf3Q075Mr9f1AFwvug14OhfAfGMcXy6+Uor7budTAeutR2A/7Af/w2at4ttiC/G/Ntsf6KcCJko+wDjG4n+Wr1VavcSdKhTs1ZUD+EX1KOZ1+HzO7XIA/7IAb5habMD9MGfgOYCJD8h8A0vACNtaxSONGCmKWeEC5B9gzvJEwAjYaxXv5MRIUeRlWbCqFHDB1uexdAfsfJ13wDtgZwLO7vcK3gE7E3B2v1fwDtiZgLP7vYKdAf8FAAD//+4/y9EAAAAGSURBVAMABZZ5mHgLhtcAAAAASUVORK5CYII=", "collections": "data:image/png;base64,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"};
const COV = '/design/build/assets/chat/';
const g='#1F9D53', tabInk='#4B4F44';

const P = (typeof __P !== 'undefined' && __P) || null;
const UI_DEFAULT = {
  "appUi.chat.title": "Practice",
  "appUi.chat.discussing": "Discussing “{book}”",
  "appUi.chat.finish": "Finish",
  "appUi.chat.playing": "Playing…",
  "appUi.chat.replyOptions": "Reply options",
  "appUi.chat.placeholder": "Write a message",
  "appUi.reader.listen": "Listen",
  "appUi.nav.library": "Library",
  "appUi.nav.practice": "Practice",
  "appUi.nav.read": "Read",
  "appUi.nav.myWords": "My words",
  "appUi.nav.collections": "Collections"
};
const UI = Object.assign({}, UI_DEFAULT, (P && P.ui) || {});
const T = k => UI[k] || '';
// Диалог. Поля названы по легаси: es = реплика на ИЗУЧАЕМОМ, en = её перевод на
// язык читателя. Раньше и то и другое было зашито испанско-русским, поэтому на
// любой другой паре чат оставался прежним.
// Запасной набор — пара en←ru, как у ридера: он взят из базы, а не написан
// заново, иначе разошёлся бы с ней молча.
const CHAT_DEFAULT = {
 "target": {
  "turns": [
   "Where did the Buttons decide that their first child should be born?",
   "They decided he should be born in a clinic.",
   "Yes, exactly — they wanted their first child born in a clinic. In what year does this decision take place?"
  ],
  "steps": [
   {
    "feedback": "Well done!",
    "reply": "Exactly! The decision takes place in the summer of 1860. And why was it so unusual to be born in a clinic back then?",
    "chips": [
     "Because in 1860 it was believed one should be born at home.",
     "The Buttons were fifty years ahead of fashion."
    ]
   },
   {
    "feedback": "Nice work!",
    "reply": "Very good! They were ahead of fashion by no less than fifty years. What is Mr. Roger Button's part in all this?",
    "chips": [
     "He is the father of the child about to be born.",
     "Mr. Button is the young husband."
    ]
   },
   {
    "feedback": "Excellent!",
    "reply": "Correct! Roger Button is the young husband and father-to-be. Let's read on to see what surprise awaits him at the clinic.",
    "chips": [
     "It takes place in 1860.",
     "The decision takes place in the summer of 1860."
    ]
   }
  ],
  "miss": "Almost — remember, we're talking about the year the Buttons made their decision. Check the suggested replies below."
 },
 "my": {
  "turns": [
   "Где супруги Баттон решили, что должен родиться их первый ребёнок?",
   "Они решили, что он должен родиться в клинике.",
   "Да, именно: они хотели, чтобы их первенец родился в клинике. В каком году принято это решение?"
  ],
  "steps": [
   {
    "feedback": "Отлично!",
    "reply": "Именно! Решение принято летом 1860 года. А почему тогда рождаться в клинике было так необычно?",
    "chips": [
     "Потому что в 1860 году считалось, что рождаться нужно дома.",
     "Баттоны опередили моду на пятьдесят лет."
    ]
   },
   {
    "feedback": "Молодец!",
    "reply": "Очень хорошо! Они опередили моду ни много ни мало на пятьдесят лет. Какое отношение к этому событию имеет мистер Роджер Баттон?",
    "chips": [
     "Он отец ребёнка, который вот-вот родится.",
     "Мистер Баттон — молодой муж."
    ]
   },
   {
    "feedback": "Превосходно!",
    "reply": "Верно! Роджер Баттон — молодой муж и будущий отец. Читаем дальше, чтобы узнать, какой сюрприз ждёт его в клинике.",
    "chips": [
     "Это происходит в 1860 году.",
     "Решение принято летом 1860 года."
    ]
   }
  ],
  "miss": "Почти: речь о годе, когда Баттоны приняли решение. Посмотри варианты ниже."
 }
};
const CT = (P && P.chat) || CHAT_DEFAULT;
const tt = i => CT.target.turns[i] || '';
const tm = i => CT.my.turns[i] || '';
const stp = (i, f) => CT.my.steps[i][f];
const stt = (i, f) => CT.target.steps[i][f];


const st = {
  messages: [
    {id:1, role:'a', es: tt(0), en: tm(0), time:'21:04'},
    {id:2, role:'u', es: tt(1), time:'21:05', feedback: stp(0, 'feedback')},
    {id:3, role:'a', es: tt(2) || '', en: tm(2) || '', time:'21:05'},
  ],
  input:'', playing:null, recording:false, step:0, bottomTab:'practice'
};
const SCRIPT = [
  { match:/1860/i,
    feedback: stp(0,'feedback'), ok: stt(0,'reply'), okEn: stp(0,'reply'),
    chips: [0,1].map(i => ({ es: stt(0,'chips')[i], en: stp(0,'chips')[i] })) },
  { match:/home|fifty|fashion|ahead/i,
    feedback: stp(1,'feedback'), ok: stt(1,'reply'), okEn: stp(1,'reply'),
    chips: [0,1].map(i => ({ es: stt(1,'chips')[i], en: stp(1,'chips')[i] })) },
  { match:/father|husband|button/i,
    feedback: stp(2,'feedback'), ok: stt(2,'reply'), okEn: stp(2,'reply'),
    chips: [0,1].map(i => ({ es: stt(2,'chips')[i], en: stp(2,'chips')[i] })) },
];
// Стартовые подсказки — это те же, что у шага 3: диалог зациклен, и после
// последнего ответа экран возвращается к вопросу про год. Раньше здесь лежала
// зашитая англо-русская пара, поэтому на любой паре подсказки оставались ими.
const INIT_CHIPS = SCRIPT[2].chips;
const INIT_CHIPS_OLD = [{es:'It takes place in 1860.', en:'Это происходит в 1860 году.'},
                    {es:'The decision takes place in the summer of 1860.', en:'Решение принято летом 1860 года.'}];

const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const listEl = __R.querySelector('[data-el="list"]');
function scrollDown(){ setTimeout(()=>{ listEl.scrollTop = listEl.scrollHeight; }, 50); }

function renderMessages(){
  listEl.innerHTML = st.messages.map(m => {
    if (m.role === 'a'){
      const tr = m.en ? `<div style="font-size:15.5px;color:#93a0ae;line-height:1.42;margin-top:6px">${esc(m.en)}</div>` : '';
      const playing = st.playing === m.id;
      return `<div style="display:flex;flex-direction:column;gap:7px"><div style="align-self:flex-start;max-width:88%;background:#fff;border-radius:20px;border-top-left-radius:6px;padding:14px 16px 12px;box-shadow:0 1px 3px rgba(0,0,0,.04)">
        <div style="font-size:17.5px;font-weight:600;color:#17181A;line-height:1.4;letter-spacing:-.1px">${esc(m.es)}</div>${tr}
        <div style="display:flex;align-items:center;gap:13px;margin-top:11px">
          <button data-listen="${m.id}" style="display:flex;align-items:center;gap:8px;background:${playing?'#c4e6c6':'#E4F1E4'};border:none;border-radius:999px;padding:9px 16px;cursor:pointer;font-family:inherit">
            <svg width="17" height="17" viewBox="0 0 16 16" fill="none"><path d="M2.5 6.2v3.6h2.4L8.4 13V3L4.9 6.2H2.5Z" fill="#1F9D53"></path><path d="M10.6 5.6a3.4 3.4 0 0 1 0 4.8M12.6 3.8a6.2 6.2 0 0 1 0 8.4" stroke="#1F9D53" stroke-width="1.5" stroke-linecap="round"></path></svg>
            <span style="font-size:16.5px;font-weight:700;color:#1F9D53">${playing ? T('appUi.chat.playing') : T('appUi.reader.listen')}</span>
          </button>
          <span style="font-size:14.5px;color:#a5a396">${m.time}</span>
        </div></div></div>`;
    }
    const fb = m.feedback ? `<div style="align-self:flex-end;display:flex;align-items:center;gap:8px;padding-right:6px"><span style="font-size:16px">🌟</span><span style="font-size:16.5px;font-weight:700;color:#1F9D53">${esc(m.feedback)}</span></div>` : '';
    return `<div style="display:flex;flex-direction:column;gap:7px"><div style="align-self:flex-end;max-width:80%;background:#D6EBD7;border-radius:20px;border-top-right-radius:6px;padding:13px 16px 10px">
      <div style="font-size:17.5px;font-weight:600;color:#1c2a1e;line-height:1.4;letter-spacing:-.1px">${esc(m.es)}</div>
      <div style="font-size:14.5px;color:#84a083;margin-top:4px">${m.time}</div></div>${fb}</div>`;
  }).join('');
  listEl.querySelectorAll('[data-listen]').forEach(b => b.onclick = () => listen(+b.dataset.listen));
}

function currentChips(){ return st.step===0 ? INIT_CHIPS : (SCRIPT[st.step-1] ? SCRIPT[st.step-1].chips : []); }
function renderChips(){
  const wrap = __R.querySelector('[data-el="sugg"]'), chips = currentChips();
  if (!chips.length){ wrap.style.display='none'; return; }
  wrap.style.display='block';
  const el = __R.querySelector('[data-el="chips"]');
  el.innerHTML = chips.map((c,i)=>`<button data-chip="${i}" style="flex:none;max-width:300px;text-align:left;background:#E4F1E4;border:1.5px solid #C0E0C6;border-radius:14px;padding:11px 14px;cursor:pointer;font-family:inherit">
    <div style="font-size:15.5px;font-weight:700;color:#1F9D53;line-height:1.35;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(c.es)}</div>
    <div style="font-size:13.5px;color:#93a09b;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(c.en)}</div></button>`).join('');
  el.querySelectorAll('[data-chip]').forEach(b => b.onclick = () => send(currentChips()[+b.dataset.chip].es));
}

function send(text){
  const t = (text||'').trim(); if(!t) return;
  const cur = SCRIPT[Math.min(st.step, SCRIPT.length-1)];
  // Верный ответ — это ВЫБРАННАЯ подсказка, а не совпадение с английскими
  // словами. Регулярки /home|fifty|fashion|ahead/ и /father|husband|button/
  // на любом неанглийском изучаемом языке не срабатывали, и ИИ отвечал «почти»
  // на верный ответ начиная со второго шага. Первый проходил случайно: в нём
  // есть число 1860, одинаковое во всех языках.
  const chosen = currentChips().some(c => (c.es || '').trim() === t);
  const hit = cur && (chosen || cur.match.test(t));
  st.messages.push({id:Date.now(), role:'u', es:t, time:'21:05', feedback: hit?cur.feedback:null});
  st.input=''; __R.querySelector('[data-el="input"]').value='';
  renderMessages(); scrollDown();
  setTimeout(()=>{
    // Ответ на неверную догадку — такая же парная реплика, как остальные:
    // на изучаемом языке и переводом. Была зашита англо-русской парой, поэтому
    // на сербско-испанском разговоре вставляла английскую фразу с русским
    // переводом посреди диалога.
    const reply = hit ? {es:cur.ok, en:cur.okEn}
                      : {es:CT.target.miss, en:CT.my.miss};
    st.messages.push({id:Date.now()+1, role:'a', es:reply.es, en:reply.en, time:'21:05'});
    if (hit) st.step++;
    renderMessages(); renderChips(); scrollDown();
  }, 1000);
}
function listen(id){ st.playing=id; renderMessages(); setTimeout(()=>{ st.playing=null; renderMessages(); }, 1600); }

const input = __R.querySelector('[data-el="input"]');
input.addEventListener('input', e => st.input = e.target.value);
input.addEventListener('keydown', e => { if (e.key === 'Enter') send(st.input); });
const mic = __R.querySelector('[data-el="mic"]');
mic.addEventListener('click', () => { st.recording = !st.recording; mic.style.background = st.recording?'#e04939':'#1F9D53'; mic.style.animation = st.recording?'micpulse 1.1s ease-out infinite':'none'; });
__R.querySelector('[data-el="clear"]').addEventListener('click', () => { st.messages=[]; st.step=0; renderMessages(); renderChips(); });
__R.querySelector('[data-el="end"]').addEventListener('click', () => { __R.querySelector('[data-el="banner"]').style.display='none'; });

const NAV = [['library',T('appUi.nav.library'),'library',25,21],['practice',T('appUi.nav.practice'),'practice',27,23],['read',T('appUi.nav.read'),'__svg',0,0],['words',T('appUi.nav.myWords'),'mywords',29,23],['collections',T('appUi.nav.collections'),'collections',44,23]];
function mask(name,w,h){ return `<span style="display:inline-block;width:${w}px;height:${h}px;background:currentColor;-webkit-mask:url(${ICONS[name]}) center/contain no-repeat;mask:url(${ICONS[name]}) center/contain no-repeat"></span>`; }
const readSvg = '<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6c-1.6-1.6-4-2.2-8-2.2v14c4 0 6.4.6 8 2.2 1.6-1.6 4-2.2 8-2.2v-14c-4 0-6.4.6-8 2.2z"></path><path d="M12 6v14"></path></svg>';
function renderNav(){
  __R.querySelector('[data-el="nav"]').innerHTML = NAV.map(([k,label,icon,w,h])=>{
    const on = st.bottomTab===k;
    const cover = k==='read' ? `<div style="position:absolute;bottom:26px;left:50%;transform:translateX(-50%);width:72px;height:66px;background:#fff;border-radius:16px;box-shadow:0 4px 18px rgba(0,0,0,0.14);padding:5px;z-index:3"><img src="${COV}read-cover.png" alt="" style="width:100%;height:100%;object-fit:contain;border-radius:11px"></div>` : '';
    const glyph = icon==='__svg' ? readSvg : mask(icon,w,h);
    return `<div data-nav="${k}" style="flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;gap:5px;cursor:pointer;color:${on?g:tabInk};position:relative">${cover}${glyph}<span style="font-size:11px;font-weight:500;text-align:center;line-height:1.05;overflow-wrap:anywhere;max-width:100%">${label}</span><div style="width:50px;height:2.5px;border-radius:2px;background:${on?g:'transparent'}"></div></div>`;
  }).join('');
  __R.querySelector('[data-el="nav"]').querySelectorAll('[data-nav]').forEach(el=>el.onclick=()=>{ st.bottomTab=el.dataset.nav; renderNav(); });
}

// подписи по метке; заголовок несёт слот {book}, поэтому отдельно
__R.querySelectorAll('[data-ui]').forEach(function (el) {
  const v = UI[el.getAttribute('data-ui')];
  if (v) el.textContent = v;
});
__R.querySelectorAll('[data-ph]').forEach(function (el) {
  const v = UI[el.getAttribute('data-ph')];
  if (v) el.setAttribute('placeholder', v);
});
(function(){
  const el = __R.querySelector('[data-el="discussing"], #discussing');
  if (el) el.textContent = T('appUi.chat.discussing')
    .replace('{book}', (P && P.book && P.book.titleMy) || '');
})();
renderMessages(); renderChips(); renderNav(); scrollDown();

// ==== авто-демо: когда экран встроен в карточку блока «цикл» (iframe) или через ?demo ====
const IFRAME = window.self !== window.top;
const DEMO = IFRAME || /[?&]demo\b/.test(location.search);
if (DEMO) startDemo();

function startDemo(){
  // body трогает только фрейм: у компонента это body лендинга
  if (IFRAME) document.body.style.cssText = 'margin:0;padding:0;background:transparent;min-height:0;display:block';
  const screen = __R.querySelector('[data-el="screen"]');
  screen.style.borderRadius = '0'; screen.style.boxShadow = 'none';   // рамку/тень даёт внешняя .phone__frame

  const INIT = st.messages.map(m => ({...m}));   // снимок стартового диалога для сброса
  const sleepD = ms => new Promise(r => setTimeout(r, ms));
  const clickEl = el => el && el.dispatchEvent(new MouseEvent('click', { bubbles:true, cancelable:true, view:window }));
  const finger = document.createElement('div');
  finger.style.cssText = 'position:absolute;z-index:60;width:44px;height:44px;pointer-events:none;opacity:0;transition:opacity .18s, top .38s ease, left .38s ease;filter:drop-shadow(0 3px 5px rgba(0,0,0,.28))';
  finger.innerHTML = '<svg width="44" height="44" viewBox="0 0 48 48" fill="none"><path d="M19 5c-1.7 0-3 1.3-3 3v17.5l-3.4-3.6a3.1 3.1 0 0 0-4.5 4.3l8.7 10.4c1.4 1.7 3.4 2.6 5.6 2.6h8.1a6 6 0 0 0 6-5.2l1.3-9.7a3.2 3.2 0 0 0-3.2-3.6H22V8c0-1.7-1.3-3-3-3z" fill="#fff" stroke="#2b2b2b" stroke-width="2" stroke-linejoin="round"/></svg>';
  screen.appendChild(finger);
  // getBoundingClientRect отдаёт координаты ПОСЛЕ transform, а style.left/top
  // задаются в координатах макета, до него. Во фрейме предков с transform не
  // было; в карточке «пяти шагов» экран ужат до 0.667, и палец уезжал — тапал
  // не туда, куда показывает. То же чинилось у ридера и у каталога.
  const scaleOf = () => (screen.offsetWidth
    ? screen.getBoundingClientRect().width / screen.offsetWidth : 1) || 1;
  const fingerTo = el => {
    if (!el) return;
    const sc = scaleOf();
    const rr = screen.getBoundingClientRect(), r = el.getBoundingClientRect();
    finger.style.left = ((r.left - rr.left + r.width/2) / sc - 6) + 'px';
    finger.style.top  = ((r.top  - rr.top  + r.height/2) / sc - 2) + 'px';
    finger.style.opacity = '1';
  };
  const tapAnim = async () => { finger.animate([{transform:'scale(1)'},{transform:'scale(.78)'},{transform:'scale(1)'}], {duration:280}); await sleepD(280); };
  const hideFinger = () => finger.style.opacity = '0';
  (async function run(){
    const inp = __R.querySelector('[data-el="input"]');
    while (true) {
      st.messages = INIT.map(m => ({...m}));   // сброс диалога
      st.step = 0; st.input = ''; inp.value = '';
      renderMessages(); renderChips(); scrollDown();
      hideFinger();
      await sleepD(1700);

      // 3 хода: впечатываем предложенный ответ в поле ввода → приходит реплика ИИ с похвалой
      for (let i = 0; i < 3; i++){
        const chips = currentChips();
        if (!chips.length) break;
        const text = chips[0].es;
        // палец к полю ввода → «фокус» → печатаем посимвольно
        fingerTo(inp); await sleepD(500); await tapAnim(); hideFinger();
        inp.value = ''; st.input = '';
        for (let k=0; k<text.length; k++){ inp.value += text[k]; st.input = inp.value; inp.scrollLeft = inp.scrollWidth; await sleepD(34); }
        await sleepD(550);
        send(text);           // отправка → ответ ИИ
        await sleepD(2300);
      }
      await sleepD(2200);
    }
  })();
}

};
