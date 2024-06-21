
export const kakaoAPI = () => {
  const REACT_APP_SHARE_KAKAO_LINK_KEY = "19b10ccc3aa2bc5c3522f67de2c996da";

    if (window.kakao) {
        const kakao = window.kakao;
        if (!kakao.isInitialized()) {
          kakao.init(process.env.REACT_APP_SHARE_KAKAO_LINK_KEY="19b10ccc3aa2bc5c3522f67de2c996da"); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
        }
    
        kakao.Link.sendDefault({
          objectType: "feed", // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
          content: {
            title: "ㅋㅋ", // 인자값으로 받은 title
            description: "뭐임마", // 인자값으로 받은 title
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48C4J0UyxfI5uRwOokboNaqQAQlTn5Qbgmg&s",
            link: {
              mobileWebUrl: "http://localhost:3000/carrot/details/17", // 인자값으로 받은 route(uri 형태)
              webUrl: "http://localhost:3000/carrot/details/17"
            }
          },
          buttons: [
            {
              title: "장난하니?",
              link: {
                mobileWebUrl: "http://localhost:3000/carrot/details/17",
                webUrl: "http://localhost:3000/carrot/details/17"
              }
            }
          ]
        });
      }
    };

    export default kakaoAPI;
  
