const newProject = (
  _name,
  _tag,
  _duration,
  _env,
  _git,
  _img,
  _explanation,
  _demo = ""
) => {
  return {
    name: _name,
    tag: _tag,
    duration: _duration,
    env: _env,
    git: _git,
    img: _img,
    explanation: _explanation,
    demo: _demo,
  };
};
export const projectDB = [
  newProject(
    "bmPuzzle",
    "web",
    "2021.10 ~ 2021.12",
    "react, typescript, socket.io, paper.js, styled-component, node.js, mySQL, Sequelize",
    "https://github.com/boostcampwm-2021/web16-bmPuzzle",
    "project_puzzle.gif",
    "웹에서 커스텀 퍼즐 제작 및 협동 퍼즐 플레이 기능을 지원하는 프로젝트입니다. 퍼즐 등록 및 생성과 멀티플레이를 위한 소켓 통신 개발을 주로 맡았습니다. github flow 전략을 사용하여 비대면으로 프로젝트를 진행했습니다.",
    "https://youtu.be/gPAK1QYn8fY"
  ),
  newProject(
    "portfolio",
    "web",
    "2022.02 ~ 2022.03",
    "react, redux",
    "https://github.com/JaeYeong-Li/portfolio",
    "project_portfolio.png",
    "react, redux 환경에서 개인 제작한 웹 포트폴리오입니다"
  ),
  newProject(
    "Approximate Adder",
    "etc",
    "2020.03 ~ 2020.09",
    "C++",
    "https://github.com/ljw8161/Adder",
    "project_adder.png",
    "정확한 계산 대신 가산을 통해 저전력 고효율의 성능을 내는 floating point adder을 설계가 목표인 프로젝트입니다. 이를 위해 먼저 IEEE 754 기반의 정확한 floating point adder을 구현해야 합니다. 저는 정확한 Floating Point Adder 구현과 Approximate Floating Pointer Adder 설계를 맡았습니다. 그 결과 500만번 테스팅 기준 정확도 100%의 floating point adder와 가산기를 구현에 성공했습니다.",
    "https://youtu.be/1foM8boSv5A"
  ),
  newProject(
    "실시간 가게 영업 정보 조회 시스템",
    "etc",
    "2020.11 ~ 2020.12",
    "JAVA(Android)",
    "https://github.com/JaeYeong-Li/Realtime-Sales-Information-System",
    "project_realtime.png",
    "코로나로 인한 주변 가게들의 영업 시간 변경에 불편함을 느끼고 이를 해결하기 위해 개발했습니다. 점주는 현재 및 미래의 가게 영업일을 기재할 수 있으며 소비자는 희망 방문 시간에 영업하는 가게의 정보만 얻을 수 있습니다. 또한 구글 맵 api로 정보를 직관적으로 얻을 수 있습니다. 회원 관리, 가게 정보 등록 및 수정, 날짜·위치 기반 검색 및 결과 기능을 구현했습니다."
  ),
  newProject(
    "Dr. Styler",
    "etc",
    "2020.08 ~ 2020.10",
    "webOS, raspbian, python",
    "https://github.com/szzi/17MB",
    "project_styler.png",
    "LG전자 스마트 TV용 운영체제 webOS를 활용하여 사용자의 얼굴을 인식해 맞춤 스타일링 코스 및 서비스를 제공하는 스타일러란 주제로 프로젝트를 진행했습니다. 라즈비안-webOS의 통신과 얼굴 인식을 담당했습니다. 새로운 OS 환경에서의 통신, 에러 처리 등의 경험을 했습니다.",
    "https://youtu.be/Z-JFcNFh8d0"
  ),
];
