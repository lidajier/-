import { defineStore } from 'pinia'
export const useArticleStore = defineStore('articles', {
  state: () => {
    return {
      articles: [
        {
          id: 1,
          title: '母亲节',
          content:
            '至了关矿边是书调群专团志空。原声取米该段约工石就说证响本电热验。把电出群华先样龙导照和要明易土是建。算学油管解实京革三节非技京元。',
          imgUrl: 'src/assets/img/4.jpg',
          avator: '吴娟',
          time: '2023/9/10',
          honor: '特邀作家',
          //还可以写上转发量点赞量收藏量等等

        },
        {
          id: 2,
          title: '母亲节',
          content:
            '规说党及温般出本变建已说即起。心们政节完火业非院个等元可界越。她响基亲老老空况原情从很治。共接使便革出层车定物党这容放一方上',
          imgUrl: 'src/assets/img/5.jpg',
          avator: '夏明',
          time: '2023/9/11',
          honor: '知名作家'
        },
        {
          id: 3,
          title: '母亲节',
          content:
            '金称济该阶历指么花证山斯育收中开小。片济前按非例历使知细于己消色际今。战复现委月斯相任构离价有。关天务全维查省九面律目连增月取在例。族是权才拉年基期面国要义共能断。即区点九党却进如增然五形步。使见飞证验查因常及消近义己般石从连心.',
          imgUrl: 'src/assets/img/6.jpg',
          avator: '陈俊',
          time: '2023/9/15',
          honor: '铂金作家'
        },
        {
          id: 4,
          title: '母亲节',
          content:
            '石就说证响本电热验。把电出群华先样龙导照和要明易土是建。算学油管解实京革三节非技京元。发例场金领几飞并于色他应观。门书感技斗员林照员集前们事。程飞们米采级状世应教类都受除流价。热点行万变素设规候热共新统北明。',
          imgUrl: 'src/assets/img/7.jpg',
          avator: '魏刚',
          time: '2023/9/20',
          honor: '精英作家'
        }
      ]
    }
  }
})
