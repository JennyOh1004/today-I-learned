function raceFace(){
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
    [RandomSource(0, 5)];

}

let funds = 50; //시작 조건
let round = 0;

whild(funds > 1 && funds < 100){
    round++;
    console.log(`round ${round}`)
    console.log(`starting funds: ${fund}`)

    //돈을 겁니다

    let bets = {
        crown: 0,
        anchor: 0,
        heart: 0,
        spade: 0,
        club: 0,
        diamond: 0
    }
    let totalBet = rand(1, funds);
    if(totalBet === 7){
        totalBet = funds;
        bets.heart = totalBet
    }
    else{
        //판돈을 나눕니다 
        let remaining = totalBet;
        do{
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        } while(remaining > 0)
    }
    funds = funds - totalBet;
   
    //주사위를 굴립니다
    const hand = [];
    for(let roll = 0; roll < 3; roll++){
        hand.push(randFace());
    }

    //딴돈을 가져옵니다
    let winnings = 0; 
    for(let die=0; die < hand.length; die++){
        let face = hand[die];
        if(bets[face] > 0 ) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    console.log(`winnings: ${winnings}`)
}
console.log(`tendeing funds: ${funds}`)




switch(expression){
    case value1: 
    //expression을 평가한 결과가 value1 일때 실행
    break;
    case value2:
    //expression을 평가한 결과가 value2 일때 실행
    break;
    case valueN:
    //expression을 평가한 결과가 valueN 일때 실행
    break;
    default:
    //expression을 평가한 결과에 맞는것이 없을때 실행.
    break;
}


switch(totalBet){
    case 7:
        totalBet = funds;
        break;
    case 13:
        funds = funds - 1; //1펜스를 기부   
        //break 가 없을때는 실수처럼 보일수도 있으니 
        //왜 생략했는지 꼭 주석 남기기.  
    case 11:
        totalBet = 0;
        break;
        //만약 위 아래 조건이 같으면 위에 조건은 생략될수있음. 
        //break 나오기 전까지 실행되니까.
    case 21:
        totalBet = 21;
        break
    default:
        console.log("No supersitition here!");
        break;
    //default 는 일치하는 case 가 없을때 실행된다
    //필수는 아니지만 보통 맨 마지막에 사용한다.
}

function adjustBet(totalBet, funds) {
    switch(totalBet){
        case 7:
            return funds;
        case 13:
            return 0;
        default:
            return totalBet;
    }
}
//break 는 switch 문안에서 꼭 써줘야한다
//return 은 즉시 함수를 빠져나가므로 break 대신 사용해도 된다.


let firstPrime = null;
for(let n of bigArrayOfNumbers){
    if(isPrime(n)){
        firstPrime = n;
        break;
    }
}

//찾는 숫자가 백만개중에 맨뒷쪽에 있다면 상관없겠지만 
//만약 그 숫자가 앞쪽에 있엇으면 나머지 쓸데없는 작업을 진행.
//그렇기때문에 break를 써주면 
//원하는 숫자를 찾고 바로 프로그램 종료. 