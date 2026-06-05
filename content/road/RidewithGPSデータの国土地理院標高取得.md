---
date: 2026-06-05
tags:
  - レビュー
---
# RidewithGPSでの獲得標高の誤差
前々から、RidewithGPSで作成したルートデータと実走データの間では獲得標高にギャップがあることに気づいていた。体感だがおおよそ5～8％くらい、RidewithGPSのデータと実測に誤差が出る。橋やトンネル、細かなギャップなどで誤差が出てしまうらしい。

ルートデータを作成した際に、獲得標高の計算方法を国土地理院が提供する標高タイルから取得するように切り替え、データをより正確に見積もるChrome拡張があるとライド仲間から教えてもらった。

# RWGPS地理院標高 - Chrome拡張機能
https://www.330k.info/software/chrome_rwgps_ele_gsi/

330k info氏が開発したRWGPS地理院標高というのがそれ。Chrome拡張なので使いやすい。

# 試してみる
先日の秦野ロードライドのデータを使って検証してみる

### 実走データ
Garmin Connectによるとこの日の**獲得標高は1,817m**  

https://plovercycles.github.io/plovercycles/road/260531-%E7%A7%A6%E9%87%8E%E3%83%AD%E3%83%BC%E3%83%89%E3%83%A9%E3%82%A4%E3%83%89
### RidewithGPSデータ
事前に引いたルートデータでは**獲得標高2,038m**
### RidewithGPSデータ(Chrome拡張による補正後)
330k info氏によるChrome拡張を使って補正した**獲得標高は1,873m**


実走データと補正後の獲得標高がかなり近い！素晴らしい！