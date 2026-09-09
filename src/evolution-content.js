export const DRAGONS=[
 {name:'새벽의 비룡',emoji:'🐉',hp:120,atk:16,armor:2,trait:'첫 턴에 받는 피해 -40%',reward:22},
 {name:'화염룡',emoji:'🔥🐲',hp:145,atk:19,armor:3,trait:'2턴마다 화상',reward:28},
 {name:'폭풍룡',emoji:'🌩️🐉',hp:110,atk:23,armor:1,trait:'공격 후 25% 확률 추가 공격',reward:30},
 {name:'고룡 아르카논',emoji:'🐲',hp:230,atk:27,armor:5,trait:'HP 50% 이하에서 공격력 +35%',reward:70}
];
export const SKILLS=[
 {id:'claw',name:'용아격',cost:0,power:1.0,desc:'기본 공격. 분노 +1'},
 {id:'breath',name:'용의 숨결',cost:2,power:1.85,desc:'강력한 공격. 방어를 2 무시'},
 {id:'guard',name:'비늘 방벽',cost:2,power:.55,desc:'다음 적 공격을 크게 경감'},
 {id:'drain',name:'생명 포식',cost:3,power:.9,desc:'피해의 60%만큼 회복'}
];
export const EVENTS=[
 {title:'갈림길',tag:'탐험',text:'빛나는 동굴과 위험한 협곡 중 하나를 선택한다.',a:['동굴','희귀 유물 발견 확률 ↑',()=>({kind:'relic',gold:0})],b:['협곡','다음 전투 보상 +50%',()=>({kind:'gold',gold:18})]},
 {title:'수상한 상인',tag:'거래',text:'지금 가진 금으로 성장할 것인가?',a:['강화','최대 HP +12',()=>({kind:'maxhp',gold:-15})],b:['거절','금 +12',()=>({kind:'gold',gold:12})]},
 {title:'고대의 알',tag:'위험',text:'알을 깨면 강력한 힘을 얻지만 다음 전투가 어려워진다.',a:['깨뜨린다','공격력 +5, 위험도 상승',()=>({kind:'power',gold:0})],b:['지킨다','회복 +25',()=>({kind:'heal',gold:0})]}
];
