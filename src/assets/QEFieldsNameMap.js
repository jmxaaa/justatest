let arr = [
    ['案件比', {
        current: 'caseDistribution',
        '刑事案件比（反向）': 'proportionOfCriminalCases',
        '民事案件比（反向）': 'proportionOfCivilCases',
        '行政案件比（反向）': 'proportionOfAdministrativeCases',
        '公益诉讼案件比（反向）': 'proportionOfPublicInterestCases',
        // '组合评价': 'evaluation'
    }],
    ['不捕不诉复议复核改变率', {
        current: 'noArrestNoAppealReconsiderationReviewChangeRate',
        '不捕不诉复议复核改变率（反向）': 'noArrestReconsiderationReviewChangeRate',
        // '不诉复议复核改变率（反向）': 'noAppealReconsiderationReviewChangeRate',
        // '组合评价': 'evaluation'
    }],
    ['捕后不诉和判处免予刑事处罚率', {
        current: 'noProsecutionAfterArrestAndExemptionFromCriminalPunishmentRate',
        '捕后不诉率（反向）': 'noProsecutionAfterArrestRate',
        '捕后判处免予刑事处罚率（反向）': 'exemptionFromCriminalPunishmentRate',
        // '组合评价': 'evaluation'
    }],
    ['撤回起诉和无罪判决率', {
        current: 'withdrawalOfProsecutionAndAcquittalRate',
        '撤回起诉和无罪判决率（反向）': 'withdrawalOfProsecutionRateandacquittalrate',
        '撤回起诉率':'withdrawalOfProsecutionRate',
         '无罪判决率': 'AcquittalRate',
    }],
    ['直接立案侦查', {
        current: 'directFilingAndInvestigationCount',
        '直接立案侦查率': 'directFilingAndInvestigationCaseCount',
        '立案直接受理侦查案件有罪判决率': 'directFilingAndInvestigationPeopleCount',
        // '组合评价': 'evaluation'
    }],
    ['刑事申诉、国家赔偿纠正率（反向）', {
        current: 'superiorSupportOfJudicialCasesRate',
        // '刑事提请抗诉采纳率': 'criminalProtestAdoptRate',
        // '民事提请抗诉采纳率': 'civilProtestAdoptRate',
        // '行政提请抗诉采纳率': 'administrativeProtestAdoptRate',
        '刑事申诉、国家赔偿纠正率（反向）': 'criminalAppealCorrectionRate',
        // '国家赔偿改变率（反向）': 'stateCompensationChangeRate',
        // '组合评价': 'evaluation'
    }],
    ['裁判案件监督提出率', {
        current: 'judicialCasesSupervisionRate',
        '刑事抗诉率': 'criminalProtestRate',
        '民事裁判案件监督率': 'civilSupervisionRate',
        '行政裁判案件监督率': 'administrativeSupervisionRate',
        // '刑事申诉再审检察建议提出率': 'criminalAppealRetrialProsecutionSuggestionRate',
        // '组合评价': 'evaluation'
    }],
    ['裁判案件监督采纳率', {
        current: 'judicialCasesSupervisionAdoptRate',
        '刑事抗诉采纳率': 'criminalProtestAdoptRate',
        '民事抗诉改变率': 'civilProtestChangeRate',
        '民事再审检察建议法院采纳率': 'civilRetrialProsecutionSuggestionAdoptRate',
        '行政抗诉改变率': 'administrativeProtestChangeRate',
        '行政再审检察建议法院采纳率': 'administrativeRetrialProsecutionSuggestionAdoptRate',
        '行政裁判案件化解行政争议率': 'administrativeDisputeResolutionRate',
        '民事裁判案件监督改变率': 'civilDisputesupervisorAdoptRate',
        '行政裁判案件监督改变率': 'administrativesupervisorAdoptRate',
    }],
    ['立案监督率', {
        current: 'filingSupervisionRate',
        '监督立案率': 'supervisionFilingRate',
        '监督撤案率': 'supervisionWithdrawalRate',
        '监督立案判处有期徒刑以上刑罚率': 'supervisionFilingImprisonmentRate',
        '立案监督率': 'FillingsupervisionRate'
    }],
    ['刑事检察非裁判监督意见提出率', {
        current: 'nonJudicialCriminalSupervisionOpinionRate',
        '侦查活动违法监督率': 'illegalInvestigationSupervisionRate',
        '刑事审判活动违法监督率': 'illegalTrialSupervisionRate',
        '减假暂书面监督意见提出率': 'writtenSupervisionOpinionRate',
        '刑罚执行和监管活动严重违法行为书面监督提出率': 'writtenSupervisionOpinionOfSeriousIllegalActsInPenalExecutionAndSupervisionRate',
        // '组合评价': 'evaluation'
    }],
    ['刑事检察非裁判监督意见采纳率', {
        current: 'nonJudicialCriminalSupervisionOpinionAdoptRate',
        '书面纠正侦查活动违法采纳率': 'writtenCorrectionOfIllegalInvestigationAdoptRate',
        '刑事审判活动违法监督采纳率': 'illegalTrialSupervisionAdoptRate',
        '减假暂书面监督意见采纳率': 'writtenSupervisionOpinionAdoptRate',
        '刑罚执行和监管活动严重违法行为监督意见采纳率': 'seriousIllegalActsInPenalExecutionAndSupervisionAdoptRate',
        // '组合评价': 'evaluation'
    }],
    ['民事行政检察非裁判监督意见提出率', {
        current: 'nonJudicialCivilAdministrativeSupervisionOpinionRate',
        '民事行政检察非裁判监督检察建议提出率': 'illegalCivilTrialSupervisionSuggestionRate',
        // '民事执行监督案件检察建议提出率': 'civilExecutionSupervisionSuggestionRate',
        // '行政审判违法监督检察建议提出率': 'illegalAdministrativeTrialSupervisionSuggestionRate',
        // '行政执行（含非诉执行）监督案件检察建议提出率': 'administrativeExecutionSupervisionSuggestionRate',
        // '行政违法行为监督案件检察建议提出率': 'illegalAdministrativeActSupervisionSuggestionRate',
        // '组合评价': 'evaluation'
    }],
    ['民事行政检察非裁判监督意见采纳率', {
        current: 'nonJudicialCivilAdministrativeSupervisionOpinionAdoptRate',
        '民事检察非裁判监督检察建议采纳率': 'illegalCivilTrialSupervisionSuggestionAdoptRate',
        '行政检察非裁判监督检察建议采纳率': 'civilExecutionSupervisionSuggestionAdoptRate',
         '民事审判违法监督检察建议采纳率': 'illegalAdministrativeTrialSupervisionSuggestionAdoptRate',
         '民事执行监督检察建议采纳率': 'administrativeExecutionSupervisionSuggestionAdoptRate',
         '行政审判违法监督检察建议采纳率': 'illegalAdministrativeActSupervisionSuggestionAdoptRate',
         '行政执行（含非诉执行）监督检查建议采纳率': 'illegalExecutionSupervisionSuggestionAdoptRate'
    }],
    ['综合业务工作', {
        current: 'socialGovernanceSupervisionSuggestionRateAndAdoptRate',
        '社会治理检察建议提出率': 'socialGovernanceSupervisionSuggestionRate',
        '社会治理检察建议采纳率': 'socialGovernanceSupervisionSuggestionAdoptRate',
        '案均邀请人民监督员监督率': 'averageNumberOfPeopleSupervisorsPerCase',
        '案均检察听证率': 'caseProsecutionHearing',
        // '组合评价': 'evaluation'
    }],
    ['诉前整改率', {
        current: 'administrativePublicInterestLitigationPreTrialProcedureRate',
        '诉前整改率': 'preTrialSuggestionRate',
        // '诉前检察建议整改率': 'preTrialSuggestionRectificationRate',
        // '组合评价': 'evaluation'
    }],
    ['漏捕漏诉纠正率', {
        current: 'missedArrestAndProsecutionCorrectionRate',
        '纠正漏捕、漏诉率': 'missedArrestAndProsecutionCorrectionRate',
        '纠正漏捕、漏诉判处有期徒刑以上刑罚率': 'missedArrestAndProsecutionCorrectionImprisonmentRate',
        // '组合评价': 'evaluation'
    }],
    ['追赃挽损工作', {
        current: 'recoverAndCompensate',
        '开展追赃挽损工作率': 'recoverAndCompensateWorkingRate',
        '案均追赃挽损金额': 'averageRecoverAmount',
        '追赃挽损率': 'recoverAndCompensateRate',
        // '组合评价': 'evaluation'
    }],
    ['认罪认罚工作', {
        current: 'confessionAndPunishment',
        '认罪认罚适用率': 'confessionAndPunishmentRate',
        '确定刑量刑建议采纳占比率': 'punishmentSuggestionAdoptRate',
        // '组合评价': 'evaluation'
    }],
    ['诉前羁押率', 'preTrialDetentionRate'],
    ['洗钱罪与上游犯罪比值', 'moneyLaunderingAndUpstreamCrimeRatio'],
    ['特色指标', {
        current: 'specialMetrics',
        '附条件不起诉率': 'conditionalNonProsecutionRate',
        '综合履职适用率': 'comprehensivePerformanceRate',
        '综合履职适用率(知识产权)': 'comprehensivePerformanceRateknowledge',
        '综合履职适用率(未检)': 'comprehensivePerformanceRatenot',
        // '组合评价': 'evaluation'
    }],
    ['司法救助率', 'judicialAidRate'],
    ['案例发布数', 'caseReleaseCount'],
    ['检察业务信息差错率', {
        current: 'businessInformationErrorRate',
        '案件信息差错率（反向）': 'caseInformationErrorRate',
        '线索信息差错率（反向）': 'clueInformationErrorRate',
        // '组合评价': 'evaluation'
    }],
    ['不捕率', 'noArrestRate'],
    ['不诉率', 'noAppealRate'],
    ['公益诉讼起诉案件数', 'publicInterestCaseCount'],
    ['涉案企业合规案件比例', 'companyComplianceCaseRatio'],
];

const nameMap = new Map(arr);

export {
    nameMap
}