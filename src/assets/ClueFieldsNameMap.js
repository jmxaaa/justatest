let arr = [
    ['线索受理数', {
        current: 'clueAccept',
        '受理数': 'count',
        '成案率': 'caseRate',
        '与本院四大检察案件受理数比': 'fourMainPercentage'
    }],
    ['对内移送线索', {
        current: 'internalTransfer',
        '线索数': 'count',
        '成案率': 'caseRate',
        '与本院四大检察案件受理数比': 'fourMainPercentage'
    }],
    ['对外移送线索', {
        current: 'externalTransfer',
        '线索数': 'count',
        '成案率': 'caseRate',
        '与本院四大检察案件受理数比': 'fourMainPercentage'
    }],
    // ['移送自侦立案线索数', {
    //     current: 'transferToSelfInvestigation',
    // }],
    ['公益诉讼线索成案率', {
        current: 'publicInterestLitigationCaseRate',
        '民事公益诉讼起诉率': 'civilProsecutionRate',
        // '行政公益诉讼线索立案率': 'administrativeCaseFilingRate',
        '行政公益诉讼立案数占公益诉讼立案数的比': 'administrativeCaseRate',
        // '组合评价': 'evaluation'
    }]
]

const nameMap = new Map(arr);

export {
    nameMap
}