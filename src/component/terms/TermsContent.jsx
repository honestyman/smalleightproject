import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const TermsContent = () => {

  return (
    <div className='w-full bg-gradient-to-t from-[#FD6E6A] to-red-500 pt-40 pb-20'>
      <div className='w-full bg-white rounded-[100px] sp:rounded-[20px] flex flex-col justify-center items-center px-10 pb-10 sp:px-5'>
        <p className='text-4xl font-bold mt-20 mb-10 text-[#FB2407] sp:text-2xl sp:mb-5'>利用規約</p>
        <div className='w-full rounded-md px-10 py-20 sp:py-5 sp:px-5'>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-xl sp:text-[16px]'>この利用規約（以下「本規約」といいます。）は，SmallEight（以下「当社」といいます。）がこのウェブサイト上で提供するサービス（以下「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下「ユーザー」といいます。）には本規約に従って、本サービスをご利用いただきます。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-2xl font-bold my-2 sp:text-xl'>第1条（適用）</p>
            <p className='text-xl sp:text-[16px]'>1. 本規約はユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</p>
            <p className='text-xl sp:text-[16px]'>2. 当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。</p>
            <p className='text-xl sp:text-[16px]'>3. 本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-2xl font-bold my-2 sp:text-xl'>第2条（利用登録）</p>
            <p className='text-xl sp:text-[16px]'>1. 本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請することによって，利用登録が完了するものとします。</p>
            <p className='text-xl sp:text-[16px]'>2. 当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。</p>
            <p className='text-xl ml-5 sp:text-[16px]'>1. 利用登録の申請に際して虚偽の事項を届け出た場合</p>
            <p className='text-xl ml-5 sp:text-[16px]'>2. 本規約に違反したことがある者からの申請である場合</p>
            <p className='text-xl ml-5 sp:text-[16px]'>3. その他，当社が利用登録を相当でないと判断した場合</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-2xl font-bold my-2 sp:text-xl'>第3条（利用料金および支払方法）掲載事業者向け</p>
            <p className='text-xl sp:text-[16px]'>1. ユーザーは、本サービスの有料部分の対価として、当社が別途定め、本ウェブサイトに表示する利用料金を、当社が指定する方法により支払うものとします。</p>
            <p className='text-xl sp:text-[16px]'>2. ユーザーが利用料金の支払を遅滞した場合には，ユーザーは年14．6％の割合による遅延損害金を支払うものとします。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-2xl font-bold my-2 sp:text-xl'>第4条（禁止事項）</p>
            <p className='text-xl sp:text-[16px]'>ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。</p>
            <p className='text-xl sp:text-[16px]'>1. 法令または公序良俗に違反する行為</p>
            <p className='text-xl sp:text-[16px]'>2. 犯罪行為に関連する行為</p>
            <p className='text-xl sp:text-[16px]'>3. 本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為</p>
            <p className='text-xl sp:text-[16px]'>4. 当社、ほかのユーザー、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</p>
            <p className='text-xl sp:text-[16px]'>5. 本サービスによって得られた情報を商業的に利用する行為</p>
            <p className='text-xl sp:text-[16px]'>6. 当社のサービスの運営を妨害するおそれのある行為</p>
            <p className='text-xl sp:text-[16px]'>7. 不正アクセスをし、またはこれを試みる行為</p>
            <p className='text-xl sp:text-[16px]'>8. 他のユーザーに関する個人情報等を収集または蓄積する行為</p>
            <p className='text-xl sp:text-[16px]'>9. 不正な目的を持って本サービスを利用する行為</p>
            <p className='text-xl sp:text-[16px]'>10. 本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為</p>
            <p className='text-xl sp:text-[16px]'>11. 他のユーザーに成りすます行為</p>
            <p className='text-xl sp:text-[16px]'>12. 当社が許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</p>
            <p className='text-xl sp:text-[16px]'>13. 当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</p>
            <p className='text-xl sp:text-[16px]'>14. その他、当社が不適切と判断する行為</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-2xl font-bold my-2 sp:text-xl'>第5条（本サービスの提供の停止等）</p>
            <p className='text-xl sp:text-[16px]'>1. 当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>
            <p className='text-xl ml-5 sp:text-[16px]'>1. 本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</p>
            <p className='text-xl ml-5 sp:text-[16px]'>2. 地震，落雷，火災，停電または天災などの不可抗力により、本サービスの提供が困難となった場合</p>
            <p className='text-xl ml-5 sp:text-[16px]'>3. コンピュータまたは通信回線等が事故により停止した場合</p>
            <p className='text-xl ml-5 sp:text-[16px]'>4. その他，当社が本サービスの提供が困難と判断した場合</p>
            <p className='text-xl sp:text-[16px]'>1. 当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-2xl font-bold my-2 sp:text-xl'>第6条（利用制限および登録抹消）</p>
            <p className='text-xl sp:text-[16px]'>1. 当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なくユーザーに対して本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。</p>
            <p className='text-xl ml-5 sp:text-[16px]'>1. 本規約のいずれかの条項に違反した場合</p>
            <p className='text-xl ml-5 sp:text-[16px]'>2. 登録事項に虚偽の事実があることが判明した場合</p>
            <p className='text-xl ml-5 sp:text-[16px]'>3. 料金等の支払債務の不履行があった場合</p>
            <p className='text-xl ml-5 sp:text-[16px]'>4. 当社からの連絡に対し、一定期間返答がない場合</p>
            <p className='text-xl ml-5 sp:text-[16px]'>5. その他，当社が本サービスの利用を適当でないと判断した場合</p>
            <p className='text-xl sp:text-[16px]'>2. 当社は、本条に基づき当社が行った行為によりユーザーに生じた損害について、一切の責任を負いません。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-2xl font-bold my-2 sp:text-xl'>第7条（保証の否認および免責事項）</p>
            <p className='text-xl sp:text-[16px]'>1. 当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</p>
            <p className='text-xl sp:text-[16px]'>2. 当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意又は重過失による場合を除き、一切の責任を負いません。ただし、本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。</p>
            <p className='text-xl sp:text-[16px]'>3. 前項ただし書に定める場合であっても、当社は当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し、または予見し得た場合を含みます。）について一切の責任を負いません。また、当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は、ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。</p>
            <p className='text-xl sp:text-[16px]'>4. 当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-2xl font-bold my-2 sp:text-xl'>第8条（サービス内容の変更等）</p>
            <p className='text-xl sp:text-[16px]'>当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-2xl font-bold my-2 sp:text-xl'>第9条（利用規約の変更）</p>
            <p className='text-xl sp:text-[16px]'>1. 当社は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。</p>
            <p className='text-xl ml-5 sp:text-[16px]'>1. 本規約の変更がユーザーの一般の利益に適合するとき</p>
            <p className='text-xl ml-5 sp:text-[16px]'>2. 本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき</p>
            <p className='text-xl sp:text-[16px]'>2. 当社はユーザーに対し、前項による本規約の変更にあたり、事前に本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-2xl font-bold my-2 sp:text-xl'>第10条（個人情報の取扱い）</p>
            <p className='text-xl sp:text-[16px]'>当社は、本サービスの利用によって取得する個人情報については「プライバシーポリシー」に従い適切に取り扱うものとします。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-2xl font-bold my-2 sp:text-xl'>第11条（通知または連絡）</p>
            <p className='text-xl sp:text-[16px]'>ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは発信時にユーザーへ到達したものとみなします。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-2xl font-bold my-2 sp:text-xl'>第12条（権利義務の譲渡の禁止）</p>
            <p className='text-xl sp:text-[16px]'>ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。</p>
          </div>
          <div className='text-left py-5 sp:py-2'>
            <p className='text-2xl font-bold my-2 sp:text-xl'>第13条（準拠法・裁判管轄）</p>
            <p className='text-xl sp:text-[16px]'>本規約の解釈にあたっては、日本法を準拠法とします。</p>
            <p className='text-xl sp:text-[16px]'>本サービスに関して紛争が生じた場合には、東京地方裁判所又は東京簡易裁判所を第一審の専属的合意管轄裁判所とします。</p>
          </div>
          <div className='text-right pt-10 sp:py-2'>
            <p className='text-xl sp:text-[16px]'>以上</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsContent;