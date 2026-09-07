window.mountMock_book = function (__R, __P) {
  const location = { search: (__P && __P.search) || '' };

const ICON = { chev:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABQCAYAAABMIbYpAAACDElEQVR4AezZTU7DMBCG4YhTsUWcCoklEpcCseVY+F1YikJ+nGa+mWk1qEPcYGI/M3Fx6dP04F8FvPcCVwWrgskzULdo8gIdTq8qeJii5B2qgskLdDi9quBhipJ3qApeLNB7+32iHWIeygoCe20sgnZr+j9UQEDAuog25/pzt+M54Pi0vla6hiBVwN8GfGuxfID8WZ5UPlcBmfMWkp+5IZVAIOFINTAc6QEMRXoBR5DPdLIOTyBz31uTn62DOdIb2AwTyBcaK2GOjAB2lwsyEghUjowGypEZgB35TWMRl9dkFiCuj/bNHJkJ2HyTOTIb0ByZEdiRa2+3Tq/JrECQbAguI5VAJqkKKjl07cxA9qVbkK0Nwj90VqAJDm1GoBkuI3ALxwZg+LYE1iNTBfdwbAD6nE8dswAlODKRASjDZQBKcdFAPqtY+zvHC8rNaw7UPKJuUXD8G38+F9pszcxwXDACuIdj/8m8zMIb6IojS55Ad5wnkE+Tttac+W0JrIdHBcH18eZHXlCkOAZTA0NxamA4Tgk8j2M2glDdoqyv5XQ5J19zy0FVQCCA+ni0Odefux1VQACAgPFGlTbn3EMJBBMGY3BCDWSM0ChgaPoNBq8KGiQx9BJVwdD0GwxeFTRIYuglqoKh6TcYvCpokMTQS9xrBYeTVsDhVCXtWBVMWpjhaVUFh1OVtOPDV/APAAD//6lmgccAAAAGSURBVAMAV7pNocx3hYUAAAAASUVORK5CYII=', heart:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAA+CAYAAACSqr0VAAAEMklEQVR4AezYPZLUMBCG4am9EzEZJyIjJuNEZMRcCj1VqypJbtvyv4cy5UZSS+r++h3Z452P1/OvIvAAqXC8Xg+Qk4B8TXlKS8NDrzKX/upke52Qn0kB+5ta9iu1pfFl2yQ4xXWVucQtc+nzscW5tgKRUOJvSSVLzeyVBds7u7hYUEI4LNcWIAQqrtC8qGsvmD2brOuFEMWTi95orvKtBbJVYClCrLHTwm++XL+2D+hsrDVAZoMmxb8LS93Zyyeo+HKhMX/pi/plLv1oTembPClLgUwFI+ZLysx+pDabMfuefFOX4kGwRmusH9lYLjnncjkp4kdxF72HCCJYFEixxERz2fcndebEggC6Ni0PLzG25hJfPYMES06IIIMAyQGGYlO367JWUWOLx6DnUzG2L/LLRV80F9bTCySkmbJIJmnqLr5AUWTPRuvmTsVYHProHJuv/L1AIpqSSFYFXDhQpGKntpm3bmrN3Byd4rTr3J6VrwfI2OmoAm0YKDYSKyS/ef2tFsUZ3J4fG7KgvmF7tTUSuyeMKlkzqD7wnhMyoJgCul1Ss+vlmZIDHgVD3Jwjt1V9PUDyxjNaUIiOTswe+cWejHM3IMQeBUPsWesBUh2p2YhvvqAHSFTifwupB8jsfRcRu6kvep+q6usBEt3T73hCqq/X4gOrXh96gBR7q+7gLa+afdNBL5DqWH3W+k6nxOmIbpfB+1QvkOi2weVdTkkEg/6B9QKxceyU3B3KmD6no3p+KHIJkLFT4tYZSyrHlUYXfZGGAQyLlgCx3qu1tjVJJW/9V47poSvS4HRE/kU/IeYAY8EkJyKvu7Klg55IA/3h6bD44+X/ZSaYoNEuIjzRo7mzfKthELj0lrGHTUHxRL8KyiYYClsLxF5Qom8ec1dA2QyD8C1A7PfNcwcoTqTblabW3N4+vNYfjrcCEfRqKGA4kbS0tgiGzXsAEecqKLvCUMheQMQ6G8ruMBSxJxDxzoIyBcMzrfuZQXRpewMR+2goczDkp2OVHQGEEKJ8UvqteQAqqvX3jO2zP1orn7zRXLfvKCAEEEekfmuKUlzrnxpbb1+0Rh75orlFviOBEEIksfqtKU6RrT8aW2d9NCe+PNHcYt/RQAgilmj91hSp2NZfjs1bV/pyX1zx83hzewYQIokmXr81xSq69Rvzm9dvTTxxW/+m8VlAiJwSr2jFW5fNmD+Py/YQGBJ8vF6a02zsByYCFA+CvtZYv7XDYEh05gmRj81B8VfrJTCIuwKIvFNQxv5qPfRkEMWuAiL3FBTzrU09g9q1q8dXAiG6F0rvOjE32dVAiJ8rdm5ejN3sDkAUExXtmRH5rT/M7gJEgYr3CxfTP+WZIXFpdwJCl98xmP4ldjcgl0Aokz5AShqp/wBJEMrrAVLSSP0HSIJQXg+QkkbqA5Ka58oEHiCZxGf7DwAA//90aK05AAAABklEQVQDAMAps30W7wj9AAAAAElFTkSuQmCC', library:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABACAYAAAC9S+EXAAAClUlEQVR4AeyaTU7EMAyFI07FBgmBuBMCsUIgJI7Ej1hyLPIWrWZSv8ZpnJb8oJo2HteJv+Y105m5cONPRWCAUmFyboAaoJQElGFjRg1QSgLKsFIz6sr3P5k/LL49+x5g135fZLMGBTi/fqTvJ4YCfLPIhtzo785nh735fZHNGhQAhQNFAaHPqi3lBjyr/HMea1Bz4gMPJHjZw6kd1Ec2AWWC2kGxMs3l919AYbWajBUv+Z8kp/eZy+9oUICDVQur1WTms8GDc87l/T8aFOCEFaTOBnafMgV+NKgQ0pb2LvJrAdQWuMnntAKquPy0oPBoMlny1djhBCY/s65joAAHqxIeTSYzvUmaVSInSl0Y5CzeGwMFOD7sbDPr/CxrfqOo/GKg8oe/X4ai8msJFLskJgpoDRSTH4Oo9rcG6otUnr0AtQbqh4DKll9roMCpiPyqAgUKGZYlvxZBsbcJWfJrEVTGpOOn1goKH/hNJlXHVr8XKVjjqw0U4ODZEx/4TSYV/0iKvyX+qLs2UIATFrW5+DDRWrs2UGu1hK8x+b2GgZp2y6CY/G40YMKYlkGFtWa1Wwf1Tegky691UA8EVLK7dVAMSPJ9qgdQTH4MoujvAdSnWLlzSfepnUGRIZd1sxmVJL8eQOEyMFh4TWW9gGIw1PLrBRR7m6CWXy+g2IxS+3sCxe5TKvn1BCpLfj2BUstMCuwN1Gb59QZqs/x6AyWpSuXrEZQkPzbTZogxUNLX0/fz2csDKX5tEKmDTo1fjtA5jAeGXLBLH4S93/EtBgrfuiLRqbEfQqAXKX5tEBjwaW4cW8ZjTJKhD/QNk15f+GKgFif06higlFd+gBqglASUYWNGDVBKAsqwMaMGKCUBZdiYUUpQfwAAAP//ODBKZgAAAAZJREFUAwC2KUeBnGBtMwAAAABJRU5ErkJggg==', practice:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABECAYAAAAWVrIgAAAFL0lEQVR4AeyZ227UQAxACz/FEwIJxBchkEA8IZBAfBEXCcQTf8Wcal1NvXbG40myyTYo7iSOryeebLc8vjn+DRHYKsCnpSstRbW945IAPxYcyL+yavlWdFq0Db5ALqaXO9YGSNMC4lVpGylL6sAXyMQj7kVgrgGQ5mgSoekUrYYTcS8Cc0mAAo7mGv3Pept8AnPxqVwCYA+47wXd65M8KWtExB7f4jJ5AHJRiHMCpNDINqVxAfWhtP/3JGUJHWKPL3EEqOcMROqiPs8mrZ8LIFNHoV4hGppnl9EL0BZM6qPOTA7XZw6AFMV7x0oi4JgW6/7cOoHJVFqxqZNptO6ldCMAn5WMFENR5fTsYCLWAqeTA5L8Hkjq1j6p6yxA4H11Mv4seoovy8UPAfnGqASI9GHciquyAD14gHsfT7+a5Z+SSSCW07vD6+POoHWSAciTs+ICz9JvRedB9PoJ1d0L0Bv5rcMTGB7ET2LQu/YABJ418tbW6K1jTXsL4stSAP2Vpe/oAejBo6C+rJe3pmY+7OpKrP7q++Z5FKD1dJg8CjED70Bpfdh1vw+jAK2ns2d48nyH390RgN70SRF7X/VW7vpAiQC81umTB6+3Mh8ocq+5tgBe+/R5gMJT2AJoJbiGd5/uS2/j8BRmAOrk13Ctt3G4pxZA/ZcW/aTCiXZgqHuzXl9nbbQA6lH+cRZhFcVFkujhMYtoATSdOpWfiz3yvKw9By9yJDQJp8DYIz0+J9ebR3JyWvX1SX1/6QX4+7578wpwL4oV8qWsXJdl8gA03wiYfoRfo9BNOpWbxMYewYfrog4f/PW8Nqbm+to87wVoBnGUNK2L0NeWq7V1LF3tm81Vx+gdjlvfXoAUeusY+OEV1BND0rTAz5lLcobWFsBfKkprEpS5eek1K8Z6K6F/y4+EtHLVITMP9qYFsE6QOa+/rPMw6msvHk3XwDhH59mLvo4dzSW+6bUXYGsrWYXQGPLOuunoAIYPwrljdqbGHunJJUH07uIhyD13bQG0Cun9dHOTb+yGHg7rVXJWcgvgmUNR6ERF9XCPCEBrlK9tClMfIIxNBKC1jZnCdFISb0z4JV+XFHr3RgAS2JpCkl4DRKsHPvnpuylRgNYUEtyHyN19CD3oSkPTh1MUILbeU6EA6ynis3Wx6vb6NHvpAchTsbYygfcIEXjUTf210Gd9PXneA5BA3lbmHsVQFOd7EOrVdXZNH869APGZSkJRe4DIn8vopRb66po+nDMASUIy/C0BoqXfis6CR230xdolGYAkINkURGy2KB48vj+n6s0CJNmeIPJa8eANDcIIQIHofTJzfwsCOO+1AjwGIV3nKMB04hUc+b4OPC8V23YIHoHnAMj3YmKJXHoiBZyuq64PeHI9tM4BcKiAmZwFGhPngSMVW3bqd1lsumQUIC9nnbD1h8i6Wc6Jgeg43jW2CL4AQ6agEYddwdQNb1mC1XIPYH1j4NwrUhqum+WcFzwCiIhgi+DbKlPAzTp1ddJRgDRSx2OL1Nf1pEQarn1HzhcHJ8WNAGSiJI6s/McMeoRpAvBa4AQaW3WxiZNGZc0CZLIsMOhEJIe10izTymrdj+rwBxiyGrS6uCxAJquOEz2XhmmWdyUrzSMA1YK96LDRgn809yJ2WYC9xQCC5qcaBqgW7EXXm3MV+yUBCrQWuFUaXSpJFiDbSmoClAiwRJgesbnaNQuQbVWDAhZytaC8xrIAvXgPTn8AHHzkB8AD4BiBUe9jAgcJHgAPgIMEBt2PCRwE+B8AAP//9ueEEgAAAAZJREFUAwBS2+WJ4ddKuwAAAABJRU5ErkJggg==', mywords:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABECAYAAAAFgfLUAAAEdklEQVR4Aeya0arUMBCGq8+kN4IoIvo8oqio1yKi+DiiqCheCT6RIDrf8WQ3/qTtNsm0TbeS/7SZJJOZr9Nuz1mvdtv/d9NS/Cl6af1Z2tYBA/ddguS9hM3FtHXAQ9BmqeKtA9bq/RgRn6WKtwz4VgST0wf2470pbu5VvGXAb2OSdv79UnY4NPcq3ipgrd6HB6RdFz8mMOtcbNW0VcBavTGwZ3HHzu+b3NoWAacq8psQjKvY9TGxJcCARVq98eMhcNYq5hcR1gaFecXH1gDzqQ+MlACLFIpWr46HPmuDUv6z4LcCmORI+qTbORCzY6p6zXzR4sfEhWHkR4BPLCNTj8OtACa5Y9SnnQFwqHp5TDDnNG/HWZNiaQXwMb3jGXCCHpkZXbNjEACtO9iYw3zWxgp+BxefMtgqYGAAJ+irJYvskNVYGyv4DfCznLKoFcBUFPEGvbGT2ybvxh7slb1PK4CpKE2SxAGg9lp9fLOH+uPuUVtvvxXAJJBKDACAYLym8Ilv9ckjg0eJ2nv7pYB5L0W8QnkrlTCJYScGzmsIX/hUX8BV22g/FzBXGKC8l6LRjZwnEANgSrfBB75iPzz/s+DiJAcwcFNXGH9LCjAAyo2BvPARrwdu6vkfzxk8zwE86HDhQQU0JRwtGp75RXDZPAewBsJV5hZaSuxPLrU16cOsb/McwOrrIkE1ztgvqVr3MGsArnKlK2VacrFL1vaGXwNwr/MZBu7IHp+kP6Wra9X3FF+HuR6AX5n3WjJX1RoxAQ2lnH4RY5VHjwfguxZoLfXBsC0umkJQSEwCLO/sxPTaDGjMr03rmM+xSB6AiwKauHgIAhADWHULZMaYE4/pYyIeyzpvGbDCeRwRoGqBGJmSp8xhbnKwhtEDMInWUuqWH8ob6FTmUGXreuayhrVPZbAYvgdgoNSS5DvYpRqRTuK2R2rXPmsBrfaivgfgooAqL+ZO0qpkC4AzxvmQit+NWwbMXdIHB4D86j40hzHmnAK6b59Re8uASe4JP0TYUlUr0w5dQLPmYLg8edJ1HWOX3bxD64A/W9pUIYA4ImxmntRYw9pY2CY5SU1uHXDIqQqM4Kzm0QMwrzZLqyajIl8egHmvXFpFUGou9gBcM77mfU0FfCWRccqWmHaepqmAT6F03SYtLQthHc0D8B9LbWlZCOtoHoDXkdlKojgXwPo5oX23y+EBeOlXNPafDeDYlfEAXPZLRtfVWD+W92zjHoBnC76FjXbAzldpKuDUfLXxJ76lpTE5Y+x37xEIf8BeWr8lZf3Q075Mr9f1AFwvug14OhfAfGMcXy6+Uor7budTAeutR2A/7Af/w2at4ttiC/G/Ntsf6KcCJko+wDjG4n+Wr1VavcSdKhTs1ZUD+EX1KOZ1+HzO7XIA/7IAb5habMD9MGfgOYCJD8h8A0vACNtaxSONGCmKWeEC5B9gzvJEwAjYaxXv5MRIUeRlWbCqFHDB1uexdAfsfJ13wDtgZwLO7vcK3gE7E3B2v1fwDtiZgLP7vYKdAf8FAAD//+4/y9EAAAAGSURBVAMABZZ5mHgLhtcAAAAASUVORK5CYII=', collections:'data:image/png;base64,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' };
const P = (typeof __P !== 'undefined' && __P) || null;
const UI_DEFAULT = {
  "appUi.bookDetail.adapted": "Adapted",
  "appUi.bookDetail.adaptedHint": "Rewritten in simpler language, meaning kept",
  "appUi.bookDetail.original": "Original",
  "appUi.bookDetail.originalHint": "The full original text, unchanged",
  "appUi.bookDetail.open": "Open",
  "appUi.bookDetail.genre": "Genre",
  "appUi.bookDetail.badgeSummary": "Summary",
  "appUi.nav.library": "Library",
  "appUi.nav.practice": "Practice",
  "appUi.nav.read": "Read",
  "appUi.nav.myWords": "My words",
  "appUi.nav.collections": "Collections",
  "appUi.wordCard.page": "p."
};
const UI = Object.assign({}, UI_DEFAULT, (P && P.ui) || {});
const T = k => UI[k] || '';
const BOOK_DEFAULT = {
 "0": {
  "id": 0,
  "title": "The Curious Case of Benjamin Button",
  "author": "F. Scott Fitzgerald",
  "pages": 51,
  "genre": "Fantasy",
  "hero": "b2165.png",
  "badge": "",
  "desc": "Benjamin Button is born with the face and the ailments of an old man, and ages the wrong way round. Growing younger with every year, he lives his life in reverse – from old age to infancy – asking deep questions about identity, love and what it means to live a life fully."
 },
 "1": {
  "id": 1,
  "title": "Around the World in Eighty Days",
  "author": "Jules Verne",
  "pages": 329,
  "genre": "Novels",
  "hero": "b2166.png",
  "badge": "",
  "desc": "In Jules Verne's classic adventure novel, the unflappable English gentleman Phileas Fogg stakes his whole fortune on a seemingly impossible task: to travel around the world in just 80 days. With his resourceful servant Passepartout beside him, Fogg sets off."
 },
 "2": {
  "id": 2,
  "title": "The Return of Sherlock Holmes",
  "author": "Arthur Conan Doyle",
  "pages": 516,
  "genre": "Mysteries",
  "hero": "b2167.png",
  "badge": "",
  "desc": "The legendary detective comes back from his supposed death at the Reichenbach Falls and pulls readers through a run of gripping puzzles that only his extraordinary mind and gift for deduction can crack. Holmes and the loyal Doctor Watson are working the streets of London again, and far beyond them."
 },
 "3": {
  "id": 3,
  "title": "The Count of Monte Cristo",
  "author": "Alexandre Dumas",
  "pages": 2346,
  "genre": "Novels",
  "hero": "b2168.png",
  "badge": "",
  "desc": "Step into a gripping story of betrayal, revenge and redemption. Follow Edmond Dantès, jailed for a crime he never committed and hungry to settle with the men who betrayed him. An intricate plot and unforgettable characters keep the tension up to the last page."
 },
 "4": {
  "id": 4,
  "title": "The Three Musketeers",
  "author": "Alexandre Dumas",
  "pages": 1180,
  "genre": "Novels",
  "hero": "b2169.png",
  "badge": "",
  "desc": "A thrilling story of adventure, loyalty and intrigue set against seventeenth-century France. The young and ambitious d'Artagnan joins forces with the legendary musketeers Athos, Porthos and Aramis and enters a dangerous game against the scheming of Cardinal Richelieu and the mysterious Milady."
 },
 "5": {
  "id": 5,
  "title": "The Bremen Town Musicians",
  "author": "The Brothers Grimm",
  "pages": 6,
  "genre": "Fairy tales",
  "hero": "b2170.png",
  "badge": "",
  "desc": "An old donkey, dog, cat and rooster are thrown out by their owners for growing too old. Set on a better life, they head for Bremen to become musicians, but on the way they run into a band of robbers. A story about friendship, quick wits and how it is never too late to start over."
 },
 "6": {
  "id": 6,
  "title": "Hansel and Gretel",
  "author": "The Brothers Grimm",
  "pages": 14,
  "genre": "Fairy tales",
  "hero": "b2171.png",
  "badge": "",
  "desc": "Abandoned in the forest by their impoverished parents, Hansel and Gretel come upon a magical gingerbread house. But the house belongs to a wicked witch who lures children in to eat them. A tense story about courage, quick thinking and family ties."
 },
 "7": {
  "id": 7,
  "title": "A Brief History of Time",
  "author": "Stephen Hawking",
  "pages": 36,
  "genre": "Power of mind",
  "hero": "b2172.png",
  "badge": "summary",
  "desc": "What is time, really? Can black holes evaporate? This mind-bending bestseller dares to explain the cosmos – without making your head explode."
 },
 "8": {
  "id": 8,
  "title": "The 80/20 Principle",
  "author": "Richard Koch",
  "pages": 16,
  "genre": "Success & career",
  "hero": "b2173.png",
  "badge": "summary",
  "desc": "Only a fifth of what you do creates almost all the value you get. Ready to drop the trivial 80% and watch your success take off? This book tells you exactly where to aim."
 },
 "9": {
  "id": 9,
  "title": "The Power of Now",
  "author": "Eckhart Tolle",
  "pages": 25,
  "genre": "Life balance",
  "hero": "b2174.png",
  "badge": "summary",
  "desc": "Tired of the endless reruns of yesterday and tomorrow your mind keeps playing? Hit pause and settle into NOW – Tolle's crash course in instant freedom. The present moment is 0% anxiety and 100% you."
 },
 "10": {
  "id": 10,
  "title": "The Art of War",
  "author": "Sun Tzu",
  "pages": 34,
  "genre": "Life balance",
  "hero": "b2175.png",
  "badge": "summary",
  "desc": "What if the best way to win is not to fight at all? This ancient manual lays out strategies that company chiefs, politicians and generals still use today, 2500 years on."
 },
 "11": {
  "id": 11,
  "title": "How to Talk So Kids Will Listen & Listen So Kids Will Talk",
  "author": "Adele Faber, Elaine Mazlish",
  "pages": 17,
  "genre": "Wise parenting",
  "hero": "b2176.png",
  "badge": "summary",
  "desc": "Tired of raising your voice? This book shows you how to speak so a child actually listens – and even answers kindly. Say goodbye to power struggles and hello to real closeness."
 },
 "12": {
  "id": 12,
  "title": "The Monk Who Sold His Ferrari",
  "author": "Robin Sharma",
  "pages": 28,
  "genre": "Life balance",
  "hero": "b2177.png",
  "badge": "summary",
  "desc": "What if real success is not a scarlet sports car but a quiet mind? A parable about a lawyer who trades his Ferrari for Himalayan wisdom, and shows how to rewrite your own destiny."
 },
 "13": {
  "id": 13,
  "title": "Who was Jack the Ripper?",
  "author": "",
  "pages": 5,
  "genre": "Amazing stories",
  "hero": "b2178.png",
  "badge": "",
  "desc": "London. Thick fog wraps the narrow streets of Whitechapel. The papers are full of headlines about the latest brutal killings. An elusive murderer, later called Jack the Ripper, takes his victims apart with surgical precision and leaves the police nothing but riddles. Who was he?"
 },
 "14": {
  "id": 14,
  "title": "Did King Arthur really exist?",
  "author": "",
  "pages": 4,
  "genre": "Amazing stories",
  "hero": "b2179.png",
  "badge": "",
  "desc": "King Arthur and the knights of the Round Table – stories of nobility, magic and chivalry passed down from one generation to the next. But was the legendary monarch a real historical figure, or only a myth spun by medieval storytellers? Let's find out."
 },
 "15": {
  "id": 15,
  "title": "Was there a real Treasure Island?",
  "author": "",
  "pages": 4,
  "genre": "Amazing stories",
  "hero": "b2180.png",
  "badge": "",
  "desc": "A map with a cross on it, a chest of gold, cunning pirates and a mysterious island full of secrets. Admit it, you have dreamed of setting off after lost riches. But how close is that picture to reality? Was there ever a real Treasure Island?"
 },
 "16": {
  "id": 16,
  "title": "What is hiding in the Bermuda Triangle?",
  "author": "",
  "pages": 7,
  "genre": "Amazing stories",
  "hero": "b2181.png",
  "badge": "",
  "desc": "Between Miami, Bermuda and Puerto Rico lies one of the most sinister patches on the planet – the Bermuda Triangle. Over the years dozens of ships and planes and hundreds of people have vanished here without a trace, leaving nothing but questions. Aliens? Ancient Atlanteans? Or…"
 },
 "17": {
  "id": 17,
  "title": "How cheese accidentally changed a country's fate",
  "author": "",
  "pages": 4,
  "genre": "Amazing stories",
  "hero": "b2182.png",
  "badge": "",
  "desc": "Picture a country whose politics and national character would have turned out differently if not for a piece of ordinary cheese. How could a dairy product shape the history of a whole nation? The answer will surprise you and change the way you look at everyday things."
 },
 "18": {
  "id": 18,
  "title": "Why do we love taking selfies?",
  "author": "",
  "pages": 4,
  "genre": "Know yourself",
  "hero": "b2183.png",
  "badge": "",
  "desc": "Open the gallery on your phone – how many selfies are in there? Today it is not just a photograph but a whole digital philosophy. We play with light, angles and expression like mini-directors of our own lives. So why does filming ourselves pull us in this much?"
 }
};

function bookAt(pos) {
  if (!P || !P.catalog) return BOOK_DEFAULT[pos] || BOOK_DEFAULT[0];
  const order = P.catalog.carousel || [];
  const id = order[pos];
  const b = (P.catalog.books || {})[id] || {};
  const t = ((P.catText || {}).b || {})[id] || [];
  return { id: id, title: t[0] || '', desc: t[1] || '', pages: b.pages,
           hero: b.hero, badge: b.badge || '',
           author: (b.author != null ? ((P.catText || {}).a || {})[b.author] : '') || '',
           genre: (b.genre != null ? ((P.catText || {}).g || {})[b.genre] : '') || '' };
}
const COUNT = (P && P.catalog && (P.catalog.carousel || []).length)
            || Object.keys(BOOK_DEFAULT).length;
const N = Math.max(0, Math.min(COUNT - 1,
  parseInt((location.search.match(/[?&]book=(\d+)/) || [])[1] || '0', 10)));
const b = bookAt(N);
const $ = id => __R.querySelector('[data-el="' + id + '"]');
__R.querySelectorAll('[data-ui]').forEach(function (el) {
  const v = UI[el.getAttribute('data-ui')];
  if (v) el.textContent = v;
});
$('hero').src = '/design/build/assets/book/' + b.hero;
$('title').textContent = b.title;
$('author').textContent = b.author || '';
$('author').style.display = b.author ? 'block' : 'none';
$('pages').textContent = b.pages + ' ' + T('appUi.wordCard.page');
$('genre').textContent = b.genre;
$('desc').textContent = b.desc;
if (b.badge) { const bd = $('badge'); bd.style.display = 'inline-flex';
               bd.textContent = T('appUi.bookDetail.badgeSummary'); }

const g = '#1F9D53', tabInk = '#4B4F44';
const NAV = [['library',T('appUi.nav.library'),'library',25,21],['practice',T('appUi.nav.practice'),'practice',27,23],['read',T('appUi.nav.read'),'__svg',0,0],['words',T('appUi.nav.myWords'),'mywords',29,23],['collections',T('appUi.nav.collections'),'collections',44,23]];
const mask = (name,w,h) => `<span style="display:inline-block;width:${w}px;height:${h}px;background:currentColor;-webkit-mask:url(${ICON[name]}) center/contain no-repeat;mask:url(${ICON[name]}) center/contain no-repeat"></span>`;
const readSvg = '<svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6c-1.6-1.6-4-2.2-8-2.2v14c4 0 6.4.6 8 2.2 1.6-1.6 4-2.2 8-2.2v-14c-4 0-6.4.6-8 2.2z"></path><path d="M12 6v14"></path></svg>';
$('nav').innerHTML = NAV.map(([k,label,icon,w,h]) => {
  const on = k === 'library';
  const glyph = icon === '__svg' ? readSvg : mask(icon,w,h);
  return `<div style="flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;gap:5px;color:${on?g:tabInk}"><span style="height:23px;display:flex;align-items:flex-end">${glyph}</span><span style="font-size:12px;font-weight:500;text-align:center;line-height:1.05;overflow-wrap:anywhere;max-width:100%">${label}</span><div style="width:50px;height:2.5px;border-radius:2px;background:${on?g:'transparent'}"></div></div>`;
}).join('');

const IFRAME = window.self !== window.top;
if (IFRAME || /[?&]demo\b/.test(location.search)) {
  if (IFRAME) {
    document.body.style.cssText = 'margin:0;padding:0;background:transparent;min-height:0;display:block';
  }
  const sc = __R.querySelector('[data-el="screen"]');
  if (sc) { sc.style.borderRadius = '0'; sc.style.boxShadow = 'none'; }
}

};
