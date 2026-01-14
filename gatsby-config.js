module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://wodon326.github.io/`,
    // Your Name
    name: 'Sanggyun Ma',
    // Main Site Title
    title: `마상균 | Computer Vision Researcher`,
    // Description that goes under your name in main bio
    // Optional: Author name
    author: `마상균`,
    // Optional: Github account URL
    github: `https://github.com/wodon326`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/%EC%83%81%EA%B7%A0-%EB%A7%88-55259b2bb/`,
    // Contact
    email: `wodon326@naver.com`,
    // phone: `+82-10-7185-8985`,
    portfolioPdf: `/마상균_포트폴리오.pdf`,
    // Content of the About Me section
    about: `Hello, I am Sanggyun Ma, an M.S. student in the Department of Interdisciplinary Studies of Artificial Intelligence (AI) at DGIST, South Korea, advised by Prof. Sunghoon Im in the DGIST Computer Vision Lab. My research interests lie in computer vision and deep learning, with a focus on 3D reconstruction, foundation model, monocular depth estimation. I received my B.S. in Computer Engineering from Yeungnam University, South Korea, in 2024.`,
    // Optional: Research interests
    // research: [
    //   {
    //     name: 'Computer Vision',
    //     description: 'Monocular Depth Estimation, 3D Reconstruction',
    //   },
    //   {
    //     name: 'Deep Learning',
    //     description:
    //       'Generalization, Parameter-Efficient Fine-tuning, Knowledge Distillation',
    //   },
    // ],
    // Optional: Publications
    
    // Optional: Education background
    education: [
      {
        name:
          'DGIST, M.S. in Interdisciplinary Studies of Artificial Intelligence (2024.02 - 2026.02)',
        description: 'GPA: 4.0/4.3',
        link: '',
      },
      {
        name:
          'Yeungnam University, B.S. in Computer Engineering (2020.02 - 2024.02)',
        description: 'GPA: 4.47/4.5 (Summa Cum Laude)',
        link: '',
      },
    ],
    publications: [
      {
        name:
          'Semantic-Enhanced Monocular Depth Estimation via Fusion and Distillation of Foundation Models',
        description:
          '**Sanggyun Ma***, Wonjoon Choi*, Jihun Park, Jaeyeul Kim and Sunghoon Im, 2025 ICCVw, 2026 ICEIC',
        link: '',
      },
      {
        name:
          'Bridging Geometric and Semantic Foundation Models for Generalized Monocular Depth Estimation',
        description:
          '**Sanggyun Ma***, Wonjoon Choi*, Jihun Park*, Seunghun Lee, Jiwan Seo, and Sunghoon Im, 2026 ICEIC',
        link: '',
      },
      {
        name:
          'Flexible Carbon Neutralization Strategy: Customized Dynamic Server Management for Energy Efficiency Optimization',
        description:
          '**Sang-Gyun Ma**, Dong-Gun Lee, Yeong-Seok Seo, 2023 IEEE Access',
        link: '',
      },
      {
        name:
          'Towards carbon-neutralization: deep learning-based server management method for efficient energy operation in data center',
        description:
          '**Sang-Gyun Ma**, Jaehyun Park, Yeong-Seok Seo, 2023 KIPS Transactions on Software and Data Engineering (KTSDE)',
        link: '',
      },
      {
        name:
          '탄소중립적 데이터 센터 운영을 위한 LSTM 기반 서버 관리 모델',
        description:
          '**Sang-Gyun Ma**, Jaehyun Park, Yeong-Seok Seo, 2022 한국정보처리학회 학술대회논문집',
        link: '',
      },
    ],
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name:
          '(HD한국조선해양) LiDAR 기반 선체 블록 하단부 보강재 간 섹션 국부 변형량 계측 자동화',
        description:
          '- LiDAR–CAD 정합(FPFH + RANSAC + ICP) 기반으로 선체 블록 하단부 보강재 라인 및 섹션을 자동 추출하는 계측 파이프라인 제안 \n- CAD·LiDAR를 Z=0 평면으로 투영해 2D Height Map·보강재 Map을 생성하고, BFS로 섹션 영역을 분할하는 알고리즘 설계 및 구현 \n- 섹션별 보강재 영역을 dilation과 3D 복원으로 추출한 뒤, RANSAC 기반 평면 추정 및 점–평면 거리 계산으로 국부 변형량 산정 \n- 계측 결과 평균 오차 1.9 mm 수준 달성, 기존 수작업 대비 보강재 간 섹션 변형량 계측의 자동화·정밀도 향상에 기여',
        link: '',
      },
      {
        name: '(HD한국조선해양) 선체 블록 계측 자동화 및 드론 기반 3차원 복원',
        description:
          '- 드론 촬영 이미지 기반 Structure from Motion(SfM, COLMAP)으로 선체 블록 3D 포인트 클라우드·메시를 자동 복원하는 파이프라인 설계 및 구현 \n- SIFT 기반 특징점 추출 및 슬라이딩 윈도우 매칭, RANSAC 기반 outlier 제거를 통해 안정적인 카메라 포즈 추정 및 대규모 선박 구조 재구성 \n- 복원된 3D 모델을 조선소 CAD·계측 좌표계와 정렬하여 보강재/블록 단위 치수·평탄도·변형량을 자동 계측하는 알고리즘 개발 \n- 현장 드론 데이터 수집, 실험 설계 및 결과 분석을 주도하며, 수작업 중심이던 선체 블록 계측 공정을 자동화',
        link: '',
      },
      {
        name: '(HD한국조선해양) 스테레오 카메라의 이미지 처리 자동화를 위한 알고리즘 개발',
        description:
          '- 스테레오 카메라 영상에 대해 캘리브레이션·ROI 추출·특징점 매칭까지 이어지는 end-to-end 이미지 처리 파이프라인 자동화 \n- 1D 원형 체커보드 패턴을 활용해 코너 수동 지정 없이 자동으로 내·외부 파라미터를 추정하는 캘리브레이션 알고리즘 설계 및 구현 \n- ROI 기반 키포인트 탐지와 RoMA + SuperGlue를 활용한 스테레오 매칭 정제로 오차 매칭 제거 및 안정적인 에피폴라 정합 구현 \n- 기존 수동/반자동 처리 대비 스테레오 정합 품질과 처리 효율을 유의미하게 향상시키며, 향후 3D 재구성·거리 추정 모듈과 연동 가능한 기반 모듈 구축',
        link: '',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'HD한국조선해양, LiDAR 기반 선체 블록 하단부 보강재 간 섹션 국부 변형량 계측 자동화 (2025.09 - 2025.12)',
        description:
          '',
        link: '',
      },
      {
        name: 'HD한국조선해양, 선체 블록 계측 자동화 및 드론 기반 3차원 복원 (2025.01 - 2025.09)',
        description: '',
        link: '',
      },
      {
        name: 'HD한국조선해양, 스테레오 카메라의 이미지 처리 자동화를 위한 알고리즘 개발 (2024.04 - 2024.09)',
        description: '',
        link: '',
      },
      {
        name: '영남대학교 학부 연구생 (2021.03 - 2024.02)',
        description: '',
        link: '',
      },
      {
        name: '한국장학재단, 국가우수장학생 성장지원 멘토링 멘토 참여 (2025.12.04)',
        description: '',
        link: '',
      },
    ],
    // Optional: Awards and scholarships
    awards: [
      {
        name: '국가 이공계 우수장학금, 한국장학재단 (2020.02 - 2024.02)',
        description: '',
        link: '',
      },
      {
        name: '성적우수장학금, 영남대학교 (2020.09 - 2024.02)',
        description: '',
        link: '',
      },
      {
        name: '특별장학금(학과추천), 영남대학교 (2021, 2022)',
        description: '',
        link: '',
      },
      {
        name: '지역인재육성장학금, 영남대학교 (2020.03)',
        description: '',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description: 'Python, C, C++',
      },
      {
        name: 'Frameworks & Tools',
        description: 'PyTorch, COLMAP',
      },
      {
        name: 'English',
        description: 'TOEIC Speaking Intermediate High (Score: 150)',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
