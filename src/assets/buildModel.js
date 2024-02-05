function buildBranchData() {
    return {
        // 单位
        name: "",
        rank: 1,
        totalScore: 0,
        // 案件受理
        caseAccepted: {
            // 四大检察案件受理数
            fourMainCaseCount: { value: 0, score: 0 ,color: 0},
            // 占全市四大检察受理数比
            fourMainCasePercentage: { value: 0, score: 0 ,color: 0 },
        },
        // 案件办理
        caseHandled: {
            // 审结数
            finishedCount: { value: 0, score: 0 ,color: 0 },
            // 占全市审结数比
            finishedPercentage: { value: 0, score: 0 ,color: 0 },
            // 审结率
            finishedRate: { value: 0, score: 0 ,color: 0 },
            // 未结数
            unfinishedCount: { value: 0, score: 0 ,color: 0 },
            // 入额院领导办案数占比
            administratorInvolvedRate: { value: 0, score: 0 ,color: 0 },
        },
        // 案件质效
        qualityAndEfficiency: {
            // 案件比
            caseDistribution: {
                // 刑事案件比
                proportionOfCriminalCases: { value: 0, score: 0 ,color: 0 },
                // 民事案件比
                proportionOfCivilCases: { value: 0, score: 0 ,color: 0 },
                // 行政案件比
                proportionOfAdministrativeCases: { value: 0, score: 0 ,color: 0 },
                // 公益诉讼案件比
                proportionOfPublicInterestCases: { value: 0, score: 0 ,color: 0 },
                evaluation: { value: 0, score: 0 ,color: 0 },
            },
            // 不捕不诉复议复核改变率
            noArrestNoAppealReconsiderationReviewChangeRate: {
                // 不捕复议复核改变率
                noArrestReconsiderationReviewChangeRate: { value: 0, score: 0 ,color: 0 },
                // 不诉复议复核改变率
                noAppealReconsiderationReviewChangeRate: { value: 0, score: 0 ,color: 0 },
                evaluation: { value: 0, score: 0 ,color: 0 },
            },
            // 捕后不诉和判处免予刑事处罚率
            noProsecutionAfterArrestAndExemptionFromCriminalPunishmentRate: {
                // 捕后不诉率
                noProsecutionAfterArrestRate: { value: 0, score: 0 ,color: 0 },
                // 捕后判处免予刑事处罚率
                exemptionFromCriminalPunishmentRate: { value: 0, score: 0 ,color: 0 },
                evaluation: { value: 0, score: 0 ,color: 0 },
            },
            // 撤回起诉和无罪判决率
            withdrawalOfProsecutionAndAcquittalRate: {
                // 撤回起诉率和无罪判决率
                withdrawalOfProsecutionRateandacquittalrate: { value: 0, score: 0 ,color: 0 },
                //撤回起诉率
                withdrawalOfProsecutionRate: { value: 0, score: 0 ,color: 0 },
                // 无罪判决率
               AcquittalRate: { value: 0, score: 0 ,color: 0 },
            },
            // 直接立案侦查数
            directFilingAndInvestigationCount: {
                // 直接立案侦查件数
                directFilingAndInvestigationCaseCount: { value: 0, score: 0 ,color: 0 },
                // 直接立案侦查人数
                directFilingAndInvestigationPeopleCount: { value: 0, score: 0 ,color: 0 },
              //  evaluation: { value: 0, score: 0 },
            },
            // 裁判案件上级支持率
            superiorSupportOfJudicialCasesRate: {
                // 刑事提请抗诉采纳率
                criminalProtestAdoptRate: { value: 0, score: 0 ,color: 0 },
                // 民事提请抗诉采纳率
                civilProtestAdoptRate: { value: 0, score: 0 ,color: 0 },
                // 行政提请抗诉采纳率
                administrativeProtestAdoptRate: { value: 0, score: 0 ,color: 0 },
                // 刑事申诉纠正率
                criminalAppealCorrectionRate: { value: 0, score: 0 ,color: 0 },
                // 国家赔偿改变率
                stateCompensationChangeRate: { value: 0, score: 0 ,color: 0 },
                evaluation: { value: 0, score: 0 ,color: 0 },
            },
            // 裁判案件监督提出率
            judicialCasesSupervisionRate: {
                // 刑事抗诉率
                criminalProtestRate: { value: 0, score: 0 ,color: 0 },
                // 民事裁判案件监督率
                civilSupervisionRate: { value: 0, score: 0 ,color: 0 },
                // 行政裁判案件监督率
                administrativeSupervisionRate: { value: 0, score: 0 ,color: 0 },
                // 刑事申诉再审检察建议提出率
            //   criminalAppealRetrialProsecutionSuggestionRate: {
            //        value: 0,
            //         score: 0,
            //     },
               // evaluation: { value: 0, score: 0 },
            },
            // 裁判案件监督采纳率
            judicialCasesSupervisionAdoptRate: {
                // 刑事抗诉采纳率
                criminalProtestAdoptRate: { value: 0, score: 0 , color: 0 },
                // 民事抗诉改变率
                civilProtestChangeRate: { value: 0, score: 0 , color: 0 },
                // 民事再审检察建议法院采纳率
                civilRetrialProsecutionSuggestionAdoptRate: {
                    value: 0,
                    score: 0,
                    color: 0,
                },
                // 行政抗诉改变率
                administrativeProtestChangeRate: { value: 0, score: 0 , color: 0 },
                // 行政再审检察建议法院采纳率
                administrativeRetrialProsecutionSuggestionAdoptRate: {
                    value: 0,
                    score: 0,
                    color: 0,
                },
                // 行政裁判案件化解行政争议率
                administrativeDisputeResolutionRate: { value: 0, score: 0 , color: 0 },
                // 民事裁判案件监督改变率
               civilDisputesupervisorAdoptRate: {
                    value: 0,
                    score: 0,
                    color: 0,
                },
                //行政裁判案件监督改变率
                administrativesupervisorAdoptRate: { value: 0, score: 0 , color: 0 },
            },
            // 立案监督率
            filingSupervisionRate: {
                // 监督立案率
                supervisionFilingRate: { value: 0, score: 0 , color: 0 },
                // 监督撤案率
                supervisionWithdrawalRate: { value: 0, score: 0 , color: 0 },
                // 监督立案判处有期徒刑以上刑罚率
                supervisionFilingImprisonmentRate: { value: 0, score: 0 , color: 0 },
                //立案监督率
                FillingsupervisionRate: { value: 0, score: 0 , color: 0 },
            },
            // 刑事检察非裁判监督意见提出率
            nonJudicialCriminalSupervisionOpinionRate: {
                // 侦查活动违法监督率
                illegalInvestigationSupervisionRate: { value: 0, score: 0 , color: 0 },
                // 刑事审判活动违法监督率
                illegalTrialSupervisionRate: { value: 0, score: 0 , color: 0 },
                // 减假暂书面监督意见提出率
                writtenSupervisionOpinionRate: { value: 0, score: 0 , color: 0 },
                // 刑罚执行和监管活动严重违法行为书面监督提出率
                writtenSupervisionOpinionOfSeriousIllegalActsInPenalExecutionAndSupervisionRate:
                    { value: 0, score: 0 , color: 0 },
               //evaluation: { value: 0, score: 0 },
            },
            // 刑事检察非裁判监督意见采纳率
            nonJudicialCriminalSupervisionOpinionAdoptRate: {
                // 书面纠正侦查活动违法采纳率
                writtenCorrectionOfIllegalInvestigationAdoptRate: {
                    value: 0,
                    score: 0,
                    color: 0,
                },
                // 刑事审判活动违法监督采纳率
                illegalTrialSupervisionAdoptRate: { value: 0, score: 0 , color: 0 },
                // 减假暂书面监督意见采纳率
                writtenSupervisionOpinionAdoptRate: { value: 0, score: 0 , color: 0 },
                // 刑罚执行和监管活动严重违法行为监督意见采纳率
                seriousIllegalActsInPenalExecutionAndSupervisionAdoptRate: {
                    value: 0,
                    score: 0,
                    color: 0,
                },
                //evaluation: { value: 0, score: 0 },
            },
            // 民事行政检察非裁判监督意见提出率
            nonJudicialCivilAdministrativeSupervisionOpinionRate: {
                // 民事审判违法监督案件检察建议提出率
                illegalCivilTrialSupervisionSuggestionRate: {
                    value: 0,
                    score: 0,
                    color: 0,
                },
                // 民事执行监督案件检察建议提出率
               // civilExecutionSupervisionSuggestionRate: { value: 0, score: 0 },
                // // 行政审判违法监督检察建议提出率
                // illegalAdministrativeTrialSupervisionSuggestionRate: {
                //     value: 0,
                //     score: 0,
                // },
                // // 行政执行监督案件检察建议提出率
                // administrativeExecutionSupervisionSuggestionRate: {
                //     value: 0,
                //     score: 0,
                // },
                // // 行政违法行为监督案件检察建议提出率
                // illegalAdministrativeActSupervisionSuggestionRate: {
                //     value: 0,
                //     score: 0,
                // },
                // evaluation: { value: 0, score: 0 },
            },
            // 民事行政检察非裁判监督意见采纳率
            nonJudicialCivilAdministrativeSupervisionOpinionAdoptRate: {
                // 民事审判违法监督案件检察建议采纳率
                illegalCivilTrialSupervisionSuggestionAdoptRate: {
                    value: 0,
                    score: 0,
                    color: 0,
                },
                // 民事执行监督案件检察建议采纳率
                civilExecutionSupervisionSuggestionAdoptRate: {
                    value: 0,
                    score: 0,
                    color: 0,
                },
                // 民事审判违法监督检察建议采纳率
                illegalAdministrativeTrialSupervisionSuggestionAdoptRate: {
                    value: 0,
                    score: 0,
                    color: 0,
                },
                // 行政执行监督案件检察建议采纳率
                administrativeExecutionSupervisionSuggestionAdoptRate: {
                    value: 0,
                    score: 0,
                    color: 0,
                },
                // 行政违法行为监督案件检察建议采纳率
                illegalAdministrativeActSupervisionSuggestionAdoptRate: {
                    value: 0,
                    score: 0,
                    color: 0,
                },
                illegalExecutionSupervisionSuggestionAdoptRate: { value: 0, score: 0 , color: 0 },
            },
            // 综合业务工作
            socialGovernanceSupervisionSuggestionRateAndAdoptRate: {
                // 社会治理检察建议提出率
                socialGovernanceSupervisionSuggestionRate: { value: 0, score: 0 , color: 0},
                // 社会治理检察建议采纳率
                socialGovernanceSupervisionSuggestionAdoptRate: {
                    value: 0,
                    score: 0,
                    color: 0,
                },
                // 案均人民监督员人场次
                averageNumberOfPeopleSupervisorsPerCase: { value: 0, score: 0 , color: 0},
                // 案件检察听证场次
                caseProsecutionHearing: { value: 0, score: 0 , color: 0 },
                //evaluation: { value: 0, score: 0 },
            },
            // 行政公益诉讼诉前程序率
            administrativePublicInterestLitigationPreTrialProcedureRate: {
                // 诉前检察建议数全市占比
                preTrialSuggestionRate: { value: 0, score: 0 , color: 0 },
                // 诉前检察建议整改率
                preTrialSuggestionRectificationRate: { value: 0, score: 0 , color: 0},
                evaluation: { value: 0, score: 0 , color: 0 },
            },
            // 漏捕漏诉纠正率
            missedArrestAndProsecutionCorrectionRate: {
                // 纠正漏捕、漏诉率
                missedArrestAndProsecutionCorrectionRate: {value: 0, score: 0 , color: 0},
                // 纠正漏捕、漏诉判处有期徒刑以上刑罚率
                missedArrestAndProsecutionCorrectionImprisonmentRate: {
                    value: 0,
                    score: 0,
                    color: 0,
                },
                //evaluation: { value: 0, score: 0 },
            },
            // 追赃挽损工作
            recoverAndCompensate: {
                // 开展追赃挽损工作率
                recoverAndCompensateWorkingRate: { value: 0, score: 0 , color: 0},
                // 案均追赃挽损金额
                averageRecoverAmount: { value: 0, score: 0 , color: 0 },
                // 追赃挽损率
                recoverAndCompensateRate: { value: 0, score: 0 , color: 0 },
               // evaluation: { value: 0, score: 0 },
            },
            // 认罪认罚工作
            confessionAndPunishment: {
                // 认罪认罚适用率
                confessionAndPunishmentRate: { value: 0, score: 0 , color: 0 },
                // 确定刑量刑建议采纳占比率
                punishmentSuggestionAdoptRate: { value: 0, score: 0 , color: 0 },
              //  evaluation: { value: 0, score: 0 },
            },
            // 诉前羁押率
            preTrialDetentionRate: { value: 0, score: 0 , color: 0 },
            // 洗钱罪与上游犯罪比值
            moneyLaunderingAndUpstreamCrimeRatio: { value: 0, score: 0 , color: 0 },
            // 特色指标
            specialMetrics: {
                // 附条件不起诉率
                conditionalNonProsecutionRate: { value: 0, score: 0 , color: 0 },
                // 综合履职适用率
                comprehensivePerformanceRate: { value: 0, score: 0 , color: 0 },
                //evaluation: { value: 0, score: 0 },
                //  综合履职适用率(知识产权)
                comprehensivePerformanceRateknowledge: { value: 0, score: 0 , color: 0},
                // 综合履职适用率(未检)
                comprehensivePerformanceRatenot: { value: 0, score: 0 , color: 0},
            },
            // 司法救助率
            judicialAidRate: { value: 0, score: 0 , color: 0 },
            // 数字检察贡献率
            digitalContributionRate: {
                // 大数据监督发现线索数占线索受理数
                bigDataClueAcceptedRate: { value: 0, score: 0 , color: 0 },
                // 大数据发现线索成案数占线索成案数
                bigDataClueMakeUpCaseRate: { value: 0, score: 0 , color: 0 },
                // 大数据监督案件占比
                bigDataClueCaseRate: { value: 0, score: 0 , color: 0 },
               // evaluation: { value: 0, score: 0 },
            },
            // 案例发布数
            caseReleaseCount: { value: 0, score: 0 , color: 0 },
            // 检察业务信息差错率
            businessInformationErrorRate: {
                // 案件信息差错率
                caseInformationErrorRate: { value: 0, score: 0 , color: 0 },
                // 线索信息差错率
                clueInformationErrorRate: { value: 0, score: 0 , color: 0 },
                //evaluation: { value: 0, score: 0 },
            },
            // 不捕率
            noArrestRate: { value: 0, score: 0 , color: 0 },
            // 不诉率
            noAppealRate: { value: 0, score: 0 , color: 0},
            // 公益诉讼起诉案件数
            publicInterestCaseCount: { value: 0, score: 0 , color: 0 },
            // 涉案企业合规案件比例
            companyComplianceCaseRatio: { value: 0, score: 0 , color: 0 },
        },
        // 四大检察结构比
        fourMainDistribution: {
            // 刑事检察
            criminal: {
                count: { value: 0, score: 0 , color: 0 },
                percentage: { value: 0, score: 0 , color: 0 },
            },
            // 民事检察
            civil: {
                count: { value: 0, score: 0 , color: 0 },
                percentage: { value: 0, score: 0 , color: 0 },
            },
            // 行政检察
            administrative: {
                count: { value: 0, score: 0 , color: 0 },
                percentage: { value: 0, score: 0 , color: 0 },
            },
            // 公益诉讼
            publicInterestLitigation: {
                count: { value: 0, score: 0 , color: 0 },
                percentage: { value: 0, score: 0 , color: 0 },
            },
        },
        // 司法办案与监督办案结构
        judicialAndSupervisionCaseHandlingStructure: {
            // 司法办案数占比
            judicialCaseHandlingRate: { value: 0, score: 0 , color: 0 },
            // 监督办案数占比
            supervisionCaseHandlingRate: { value: 0, score: 0 , color: 0 },
        },
        // 业务来源结构
        businessSourceStructure: {
            // 依职权监督
            superviseByPower: {
                count: { value: 0, score: 0 , color: 0 },
                yearOnYear: { value: 0, score: 0 , color: 0 },
                percentage: { value: 0, score: 0 , color: 0 },
            },
            // 依申请监督
            superviseByApplication: {
                count: { value: 0, score: 0 , color: 0 },
                yearOnYear: { value: 0, score: 0 , color: 0 },
                percentage: { value: 0, score: 0 , color: 0 },
            },
            // 依移送受理
            acceptByTransfer: {
                count: { value: 0, score: 0 , color: 0 },
                yearOnYear: { value: 0, score: 0 , color: 0 },
                percentage: { value: 0, score: 0 , color: 0 },
            },
        },
        // 线索双向移送
        clueBidirectionalTransfer: {
            // 线索受理数
            clueAccept: {
                count: { value: 0, score: 0 , color: 0 },
                caseRate: { value: 0, score: 0 , color: 0 },
                fourMainPercentage: { value: 0, score: 0 , color: 0 },
            },
            // 对内移送线索
            internalTransfer: {
                count: { value: 0, score: 0 , color: 0 },
                caseRate: { value: 0, score: 0 , color: 0 },
                fourMainPercentage: { value: 0, score: 0 , color: 0 },
            },
            // 对外移送线索
            externalTransfer: {
                count: { value: 0, score: 0 , color: 0 },
                caseRate: { value: 0, score: 0 , color: 0 },
                fourMainPercentage: { value: 0, score: 0 , color: 0 },
            },
            // 移送自侦立案线索数
            transferToSelfInvestigation: { value: 0, score: 0 , color: 0 },
            // 公益诉讼线索成案率
            publicInterestLitigationCaseRate: {
                // 民事公益诉讼起诉率
                civilProsecutionRate: { value: 0, score: 0 , color: 0 },
                // 行政公益诉讼线索立案率
                administrativeCaseFilingRate: { value: 0, score: 0 , color: 0 },
                // 行政公益诉讼线索占公益诉讼线索受理数
                administrativeCaseRate: { value: 0, score: 0 , color: 0 },
                evaluation: { value: 0, score: 0 , color: 0 },
            },
        },
        // 人均办案量
        perCapitaCaseHandling: {
            // 实有人均办案量
            actualPerCapitaCaseHandling: { value: 0, score: 0 , color: 0 },
            // 实有入额检察官人均办案量
            actualPerCapitaCaseHandlingOfProsecutors: { value: 0, score: 0 , color: 0 },
            // 检察官员额人均办案量
            perCapitaCaseHandlingOfProsecutors: { value: 0, score: 0 , color: 0 },
            // 检察官员额人均办案量同比
            perCapitaCaseHandlingOfProsecutorsYearOnYear: {
                value: 0,
                score: 0,
                color: 0,
            },
        },
    }
}

function buildCityData() {
    let obj = buildBranchData();
    obj.name = "全市"

    return obj;
}

export {
    buildCityData,
    buildBranchData
}