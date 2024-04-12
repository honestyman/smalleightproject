import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const PolicyContent = () => {

  return (
    <div className='w-full bg-[#f4f8f9] pt-20'>
      <div className='w-full [#f4f8f9] rounded-[100px] sp:rounded-[20px] flex flex-col justify-center items-center px-10 pb-10 sp:px-5'>
        <p className='text-4xl font-bold mt-20 text-[#B40100] sp:text-2xl sp:mb-5'>プライバシーポリシー</p>
        <div className='w-full rounded-md px-10 py-20 sp:py-5 sp:px-5'>
          <div className='text-left py-5 sp:py-2'>
            <p className='sp:text-[16px]'>SmallEightは、本ウェブサイト上で提供するサービス（以下「本サービス」といいます。）におけるユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシーを定めます。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-xl font-bold my-2 sp:text-xl'>個人情報</p>
            <p className='sp:text-[16px]'>「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名、会社名、電話番号、メールアドレス、その他の記述等により特定の個人を識別できる情報及びデータなどの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-xl font-bold my-2 sp:text-xl'>個人情報の収集方法</p>
            <p className='sp:text-[16px]'>ユーザーが利用登録をする際に氏名、会社名、電話番号、メールアドレスなどの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を提携先（情報提供元、広告主、広告配信先などを含みます。以下｢提携先｣といいます。）などから収集することがあります。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-xl font-bold my-2 sp:text-xl'>個人情報を収集・利用する目的</p>
            <p className='sp:text-[16px]'>1. 本ウェブサイトが個人情報を収集・利用する目的は以下のとおりです。</p>
            <p className='sp:text-[16px]'>2. 本サービスの提供・運営のため</p>
            <p className='sp:text-[16px]'>3. ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</p>
            <p className='sp:text-[16px]'>4. メンテナンス、重要なお知らせなど必要に応じたご連絡のため</p>
            <p className='sp:text-[16px]'>5. 利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をしご利用をお断りするため</p>
            <p className='sp:text-[16px]'>6. 上記の利用目的に付随する目的</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-xl font-bold my-2 sp:text-xl'>利用目的の変更</p>
            <p className='sp:text-[16px]'>本サービスは、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。</p>
            <p className='sp:text-[16px]'>利用目的の変更を行った場合には、変更後の目的について所定の方法によりユーザーに通知し、または本ウェブサイト上に公表するものとします。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-xl font-bold my-2 sp:text-xl'>プライバシーポリシーの変更</p>
            <p className='sp:text-[16px]'>本ポリシーの内容は，法令その他本ポリシーに別段の定めのある事項を除いて，ユーザーに通知することなく，変更することができるものとします。</p>
            <p className='sp:text-[16px]'>別途定める場合を除いて，変更後のプライバシーポリシーは，本ウェブサイトに掲載したときから効力を生じるものとします。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-xl font-bold my-2 sp:text-xl'>免責事項</p>
            <p className='sp:text-[16px]'>本ウェブサイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。</p>
            <p className='sp:text-[16px]'>また本ウェブサイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。</p>
            <p className='sp:text-[16px]'>本ウェブサイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-xl font-bold my-2 sp:text-xl'>広告について</p>
            <p className='sp:text-[16px]'>本ウェブサイトでは、第三者配信の広告サービスを利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。</p>
            <p className='sp:text-[16px]'>Cookieを無効にする方法やGoogleアドセンスに関する詳細は<Link className='font-bold text-blue-700 underline'>「広告 – ポリシーと規約 – Google」</Link>をご確認ください。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-xl font-bold my-2 sp:text-xl'>アクセス解析ツールについて</p>
            <p className='sp:text-[16px]'>当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
          </div>
          <div className='text-right pt-10 sp:py-2'>
            <p className='sp:text-[16px]'>制定日 : 定日和6年04月01日</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyContent;