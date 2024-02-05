<template>
  <el-container>
    <el-main>
      <el-radio-group
        v-model="rankFigureField"
        class="ml-4"
        @change="rankFieldChange"
      >
        <el-radio :label="1">分院（含辖区）</el-radio>

        <el-radio :label="2">分院</el-radio>

        <el-radio :label="3">基层院</el-radio>

        <el-radio :label="4">铁检院</el-radio>

        <el-radio :label="5">派出院</el-radio>
      </el-radio-group>

      <div id="rank-figure" />

      <el-divider>{{ currentObject.name }}综合数据</el-divider>

      <p>三大结构比</p>

      <el-radio-group
        v-model="structureDistributionField"
        class="ml-4"
        @change="structureDistributionFieldChange"
      >
        <el-radio :label="1">四大检察结构比</el-radio>

        <el-radio :label="2">业务来源结构比</el-radio>

        <el-radio :label="3">司法办案与监督办案结构比</el-radio>
      </el-radio-group>

      <div style="display: flex; flex-direction: row">
        <div id="structure-distribution-figure" />

        <el-space
          direction="vertical"
          alignment="flex-start"
          v-if="structureDistributionField === 1"
        >
          <el-text
            >刑事检察受理数<el-text type="danger">（反向）</el-text></el-text
          >

          <el-text
            ><el-text type="primary">{{
              currentObject.fourMainDistribution.criminal.count.value
            }}</el-text
            >件，占比<el-text type="primary"
              >{{
                currentObject.fourMainDistribution.criminal.percentage.value
              }}%</el-text
            >
          </el-text>

          <el-text>民事检察受理数</el-text>

          <el-text
            ><el-text type="primary">{{
              currentObject.fourMainDistribution.civil.count.value
            }}</el-text
            >件，占比<el-text type="primary"
              >{{
                currentObject.fourMainDistribution.civil.percentage.value
              }}%</el-text
            >
          </el-text>

          <el-text>行政检察受理数</el-text>

          <el-text
            ><el-text type="primary">{{
              currentObject.fourMainDistribution.administrative.count.value
            }}</el-text
            >件，占比<el-text type="primary"
              >{{
                currentObject.fourMainDistribution.administrative.percentage
                  .value
              }}%</el-text
            >
          </el-text>

          <el-text>公益诉讼受理数</el-text>

          <el-text
            ><el-text type="primary">{{
              currentObject.fourMainDistribution.publicInterestLitigation.count
                .value
            }}</el-text
            >件，占比<el-text type="primary"
              >{{
                currentObject.fourMainDistribution.publicInterestLitigation
                  .percentage.value
              }}%</el-text
            >
          </el-text>
        </el-space>

        <el-space
          direction="vertical"
          alignment="flex-start"
          v-else-if="structureDistributionField === 2"
        >
          <el-text
            >依移送受理数<el-text type="danger">（反向）</el-text></el-text
          >

          <el-text
            ><el-text type="primary">{{
              currentObject.businessSourceStructure.acceptByTransfer.count.value
            }}</el-text
            >件，占比<el-text type="primary"
              >{{
                currentObject.businessSourceStructure.acceptByTransfer
                  .percentage.value
              }}%</el-text
            >
          </el-text>

          <el-text>依申请监督受理数</el-text>

          <el-text
            ><el-text type="primary">{{
              currentObject.businessSourceStructure.superviseByApplication.count
                .value
            }}</el-text
            >件，占比<el-text type="primary"
              >{{
                currentObject.businessSourceStructure.superviseByApplication
                  .percentage.value
              }}%</el-text
            >
          </el-text>

          <el-text>依职权主动监督受理数</el-text>

          <el-text
            ><el-text type="primary">{{
              currentObject.businessSourceStructure.superviseByPower.count.value
            }}</el-text
            >件，占比<el-text type="primary"
              >{{
                currentObject.businessSourceStructure.superviseByPower
                  .percentage.value
              }}%</el-text
            >
          </el-text>
        </el-space>

        <el-space
          direction="vertical"
          alignment="flex-start"
          v-else-if="structureDistributionField === 3"
        >
          <el-text
            >司法办案数占比<el-text type="danger">（反向）</el-text></el-text
          >

          <el-text type="primary"
            >{{
              currentObject.judicialAndSupervisionCaseHandlingStructure
                .judicialCaseHandlingRate.value
            }}%</el-text
          >

          <el-text>监督办案数占比</el-text>

          <el-text type="primary"
            >{{
              currentObject.judicialAndSupervisionCaseHandlingStructure
                .supervisionCaseHandlingRate.value
            }}%</el-text
          >
        </el-space>
      </div>

      <el-card class="box-card" style="margin: 3px">
        <div>
          <el-row
            v-for="item in sortedArrayWithStructureDistribution(
              structureDistributionField
            )"
            :key="item.name"
            style="height: 40px"
          >
            <el-col :span="6" class="aligned-el-col">
              <el-text truncated>{{ item.name }} </el-text>
            </el-col>

            <el-col :span="18" class="aligned-el-col">
              <el-text type="primary">{{ item.display }}</el-text>
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-divider />

      <p>数字检察贡献率</p>

      <el-space direction="vertical" alignment="flex-start">
        <el-text
          >大数据监督发现线索数占线索受理数的比<el-text type="primary"
            >{{
              currentObject.qualityAndEfficiency.digitalContributionRate
                .bigDataClueAcceptedRate.value
            }}%</el-text
          ></el-text
        >

        <el-text
          >大数据发现线索成案数占线索成案数的比<el-text type="primary"
            >{{
              currentObject.qualityAndEfficiency.digitalContributionRate
                .bigDataClueMakeUpCaseRate.value
            }}%</el-text
          ></el-text
        >

        <el-text
          >大数据监督案件占比<el-text type="primary"
            >{{
              currentObject.qualityAndEfficiency.digitalContributionRate
                .bigDataClueCaseRate.value
            }}%</el-text
          ></el-text
        >
      </el-space>

      <el-card class="box-card" style="margin: 3px">
        <div>
          <el-row
            v-for="item in sortedArrayWithDigitalCase()"
            :key="item.name"
            style="height: 40px"
          >
            <el-col :span="6" class="aligned-el-col">
              <el-text truncated>{{ item.name }}</el-text>
            </el-col>

            <el-col :span="18" class="aligned-el-col">
              <el-text type="primary">{{ item.display }}</el-text>
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-divider />

      <p>案件受理</p>

      <div>
        <el-space direction="vertical" alignment="flex-start">
          <el-text
            >四大检察案件受理<el-text type="primary">{{
              currentObject.caseAccepted.fourMainCaseCount.value
            }}</el-text
            >件</el-text
          >
        </el-space>

        <el-row
          v-for="item in sortedArrayWithAcceptCount()"
          :key="item.name"
          style="height: 40px"
        >
          <el-col :span="10">
            <el-text truncated
              >{{ item.name }}<el-text type="primary">{{ item.count }}</el-text
              >件</el-text
            >
          </el-col>

          <el-col :span="14">
            <el-progress :percentage="item.percentage" />
          </el-col>
        </el-row>
      </div>

      <el-divider />

      <p>案件办理</p>

      <div style="display: flex; flex-direction: row">
        <el-card
          class="box-card"
          style="margin: 3px; width: 33%"
          @click="caseHandledFieldChange(1)"
        >
          <template #header>
            <div class="card-header">
              <el-text truncated>审结数</el-text>
            </div>
          </template>

          <div>
            <el-text type="primary">{{
              currentObject.caseHandled.finishedCount.value
            }}</el-text>
          </div>
        </el-card>

        <el-card
          class="box-card"
          style="margin: 3px; width: 33%"
          @click="caseHandledFieldChange(2)"
        >
          <template #header>
            <div class="card-header">
              <el-text truncated>审结率</el-text>
            </div>
          </template>

          <div>
            <el-text type="primary">{{
              `${currentObject.caseHandled.finishedRate.value}%`
            }}</el-text>
          </div>
        </el-card>

        <el-card
          class="box-card"
          style="margin: 3px; width: 33%"
          @click="caseHandledFieldChange(3)"
        >
          <template #header>
            <div class="card-header">
              <el-text truncated
                >未结数<el-text type="danger">（反向）</el-text></el-text
              >
            </div>
          </template>

          <div>
            <el-text type="primary">{{
              currentObject.caseHandled.unfinishedCount.value
            }}</el-text>
          </div>
        </el-card>
      </div>

      <el-card
        class="box-card"
        style="margin: 3px"
        v-if="caseHandledField === 1"
      >
        <div>
          <el-row
            v-for="item in sortedArrayWithFinishedCount()"
            :key="item.name"
            style="height: 40px"
          >
            <el-col :span="10">
              <el-text truncated
                >{{ item.name
                }}<el-text type="primary">{{ item.count }}</el-text
                >件</el-text
              >
            </el-col>

            <el-col :span="14">
              <el-progress :percentage="item.percentage" />
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-card
        class="box-card"
        style="margin: 3px"
        v-if="caseHandledField === 2"
      >
        <div>
          <el-row
            v-for="item in sortedArrayWithFinishedRate()"
            :key="item.name"
            style="height: 40px"
          >
            <el-col :span="6">
              <el-text truncated>{{ item.name }}</el-text>
            </el-col>

            <el-col :span="18">
              <el-progress :percentage="item.percentage" />
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-card
        class="box-card"
        style="margin: 3px"
        v-else-if="caseHandledField === 3"
      >
        <div>
          <el-row
            v-for="item in sortedArrayWithUnfinishedCount()"
            :key="item.name"
            style="height: 40px"
          >
            <el-col :span="6">
              <el-text truncated>{{ item.name }}</el-text>
            </el-col>

            <el-col :span="8">
              <el-text truncated
                ><el-text type="primary">{{ item.count }}</el-text
                >件</el-text
              >
            </el-col>

            <el-col :span="10">
              <el-text type="primary"
                >{{ item.score }}<el-text>分</el-text></el-text
              >
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-divider />

      <p>线索情况</p>

      <el-select
        v-model="clueParentKey"
        class="m-2"
        style="margin: 5px"
        @change="clueParentChange"
      >
        <el-option v-for="item in clueParentKeys" :key="item" :value="item" />
      </el-select>

      <el-select
        v-model="clueSubKey"
        class="m-2"
        v-if="clueSubKeys.length !== 0"
        style="margin: 5px"
        @change="clueSubKeyChange"
      >
        <el-option v-for="item in clueSubKeys" :key="item" :value="item" />
      </el-select>

      <p style="margin: 10px">
        {{ currentObject.name }}数据：<el-text type="primary">{{
          clueCity
        }}</el-text
        >{{ clueAppendix }}
      </p>

      <el-card class="box-card" style="margin: 3px">
        <div>
          <el-row
            v-for="item in clueFirstThree"
            :key="item.name"
            style="height: 40px"
          >
            <el-col :span="12" class="aligned-el-col">
              <el-text truncated>{{ item.name }}</el-text>
            </el-col>

            <el-col :span="12" class="aligned-el-col">
              <el-text type="primary"
                >{{ item.actValue
                }}<el-text>{{ clueAppendix }}</el-text></el-text
              >
            </el-col>
          </el-row>
        </div>
      </el-card>

      <el-divider />

      <p>案件质效</p>

      <el-select
        v-model="qeParentKey"
        class="m-2"
        style="margin: 5px"
        @change="qeParentChange"
      >
        <el-option v-for="item in qeParentKeys" :key="item" :value="item" />
      </el-select>

      <el-select
        v-model="qeSubKey"
        class="m-2"
        v-if="qeSubKeys.length !== 0"
        style="margin: 5px"
        @change="qeSubKeyChange"
      >
        <el-option v-for="item in qeSubKeys" :key="item" :value="item" />
      </el-select>

      <p style="margin: 10px">
        {{ currentObject.name }}数据：<el-text type="primary">{{
          qeCity
        }}</el-text
        >{{ qeAppendix }}
      </p>

      <el-card class="box-card" style="margin: 3px">
        <div>
          <el-row
            v-for="item in qeFirstThree"
            :key="item.name"
            style="height: 40px"
          >
            <el-col :span="12" class="aligned-el-col">
              <el-text truncated>{{ item.name }}</el-text>
            </el-col>

            <el-col :span="12" class="aligned-el-col">
              <el-text type="primary"
                >{{ item.actValue }}<el-text>{{ qeAppendix }}</el-text></el-text
              >
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-main>

    <el-footer>
      <el-text type="primary" truncated
        >{{ getYear() }}©️北京市人民检察院</el-text
      >
    </el-footer>
  </el-container>
</template>

<script>
import { useDark } from "@vueuse/core";
import { buildCityData, buildBranchData } from "../assets/buildModel.js";
import { formatString, formatNumber } from "../assets/parser.js";
import axios from "axios";
import { ElLoading } from "element-plus";
import { read, utils } from "xlsx";
import * as echarts from "echarts";
import geoJson from "../assets/geoBeijing.json";
import { nameMap as clueNameMap } from "../assets/ClueFieldsNameMap.js";
import { nameMap as qeNameMap } from "../assets/QEFieldsNameMap.js";

export default {
  name: "HomeView",
  data() {
    return {
      darkMode: useDark(),
      fieldId: 0,
      division: {
        firstFlag: 6,
        secondFlag: -3,
      },
      excelFileUrl: "/res/data/table.xlsx",
      loading: null,
      workBook: null,
      sheet: null,
      // 全市
      wholeCity: buildCityData(),
      // 分院（含辖区）
      branchCourtWithDistrict: [
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
      ],
      // 分院
      branchCourt: [
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
      ],
      // 辖区院
      jurisdictionCourt: [
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
        buildBranchData(),
      ],
      // 铁检院
      railwayCourt: [buildBranchData(), buildBranchData(), buildBranchData()],
      // 派出院
      dispatchCourt: [buildBranchData(), buildBranchData()],
      rankFigureField: 3,
      rankFigure: null,
      structureDistributionField: 1,
      structureDistributionFigure: null,
      caseHandledField: 1,
      clueParentKeys: clueNameMap.keys(),
      clueParentKey: "线索受理数",
      clueSubKeys: [],
      clueSubKey: "",
      clueCity: 0,
      clueAppendix: "",
      clueFirstThree: [],
      clueLastThree: [],
      qeParentKeys: qeNameMap.keys(),
      qeParentKey: "案件比",
      qeSubKeys: [],
      qeSubKey: "",
      qeCity: 0,
      qeAppendix: "",
      qeFirstThree: [],
      qeLastThree: [],
      currentObject: buildBranchData(),
      comparisonRange: [],
    };
  },
  methods: {
    async loadXlsx() {
      this.loading ??= ElLoading.service({
        lock: true,
        text: "正在加载Excel文件...",
        background: "rgba(0, 0, 0, 0.7)",
      });

      try {
        // wait 1s
        // await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await axios.get(this.excelFileUrl, {
          responseType: "arraybuffer",
        });

        this.workBook ??= read(response.data, { type: "buffer" });

        return true;
      } catch (err) {
        console.log(err);
        alert("加载Excel出错！");
        return false;
      }
    },
    loadWholeCityData() {
      for (let col = 3; col <= utils.decode_col("EQ"); col++) {
        const cellIndex = utils.encode_cell({ c: col, r: 5 });
        const cell = this.sheet[cellIndex];

        if (cell === undefined) {
          continue;
        }

        // read each cells and store in this.wholeCity
        switch (col) {
          case 3:
            this.wholeCity.caseAccepted.fourMainCaseCount.value = formatNumber(
              cell.v
            );
            break;
          case 4:
            this.wholeCity.caseAccepted.fourMainCasePercentage.value =
              formatNumber(cell.v);
            break;
          case 5:
            this.wholeCity.caseHandled.finishedCount.value = formatNumber(
              cell.v
            );
            break;
          case 6:
            this.wholeCity.caseHandled.finishedPercentage.value = formatNumber(
              cell.v
            );
            break;
          case 7:
            this.wholeCity.caseHandled.finishedRate.value = formatNumber(
              cell.v
            );
            break;
          case 8:
            this.wholeCity.caseHandled.unfinishedCount.value = formatNumber(
              cell.v
            );
            break;
          case 9:
            this.wholeCity.caseHandled.administratorInvolvedRate.value =
              formatNumber(cell.v);
            break;
          case 10:
            this.wholeCity.qualityAndEfficiency.caseDistribution.proportionOfCriminalCases.value =
              formatNumber(cell.v);
            break;
          case 11:
            this.wholeCity.qualityAndEfficiency.caseDistribution.proportionOfCivilCases.value =
              formatNumber(cell.v);
            break;
          case 12:
            this.wholeCity.qualityAndEfficiency.caseDistribution.proportionOfAdministrativeCases.value =
              formatNumber(cell.v);
            break;
          case 13:
            this.wholeCity.qualityAndEfficiency.caseDistribution.proportionOfPublicInterestCases.value =
              formatNumber(cell.v);
            break;
          case 14:
            this.wholeCity.qualityAndEfficiency.caseDistribution.evaluation.value =
              formatNumber(cell.v);
            break;
          case 15:
            this.wholeCity.qualityAndEfficiency.noArrestNoAppealReconsiderationReviewChangeRate.noArrestReconsiderationReviewChangeRate.value =
              formatNumber(cell.v);
            break;
          case 16:
            this.wholeCity.qualityAndEfficiency.noArrestNoAppealReconsiderationReviewChangeRate.noAppealReconsiderationReviewChangeRate.value =
              formatNumber(cell.v);
            break;
          case 17:
            this.wholeCity.qualityAndEfficiency.noArrestNoAppealReconsiderationReviewChangeRate.evaluation.value =
              formatNumber(cell.v);
            break;
          case 18:
            this.wholeCity.qualityAndEfficiency.noProsecutionAfterArrestAndExemptionFromCriminalPunishmentRate.noProsecutionAfterArrestRate.value =
              formatNumber(cell.v);
            break;
          case 19:
            this.wholeCity.qualityAndEfficiency.noProsecutionAfterArrestAndExemptionFromCriminalPunishmentRate.exemptionFromCriminalPunishmentRate.value =
              formatNumber(cell.v);
            break;
          case 20:
            this.wholeCity.qualityAndEfficiency.noProsecutionAfterArrestAndExemptionFromCriminalPunishmentRate.evaluation.value =
              formatNumber(cell.v);
            break;
          case 21:
            this.wholeCity.qualityAndEfficiency.withdrawalOfProsecutionAndAcquittalRate.withdrawalOfProsecutionRateandacquittalrate.value =
              formatNumber(cell.v);
            break;
          case 22:
            this.wholeCity.qualityAndEfficiency.withdrawalOfProsecutionAndAcquittalRate.withdrawalOfProsecutionRate.value =
              formatNumber(cell.v);
            break;
          case 23:
            this.wholeCity.qualityAndEfficiency.withdrawalOfProsecutionAndAcquittalRate.AcquittalRate.value =
              formatNumber(cell.v);
            break;
          case 24:
            this.wholeCity.qualityAndEfficiency.directFilingAndInvestigationCount.directFilingAndInvestigationCaseCount.value =
              formatNumber(cell.v);
            break;
          case 25:
            this.wholeCity.qualityAndEfficiency.directFilingAndInvestigationCount.directFilingAndInvestigationPeopleCount.value =
              formatNumber(cell.v);
            break;
          case 26:
            this.wholeCity.qualityAndEfficiency.directFilingAndInvestigationCount.evaluation.value =
              formatNumber(cell.v);
            break;
          case 27:
            this.wholeCity.qualityAndEfficiency.superiorSupportOfJudicialCasesRate.criminalProtestAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 28:
            this.wholeCity.qualityAndEfficiency.superiorSupportOfJudicialCasesRate.civilProtestAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 29:
            this.wholeCity.qualityAndEfficiency.superiorSupportOfJudicialCasesRate.administrativeProtestAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 30:
            this.wholeCity.qualityAndEfficiency.superiorSupportOfJudicialCasesRate.criminalAppealCorrectionRate.value =
              formatNumber(cell.v);
            break;
          case 31:
            this.wholeCity.qualityAndEfficiency.superiorSupportOfJudicialCasesRate.stateCompensationChangeRate.value =
              formatNumber(cell.v);
            break;
          case 32:
            this.wholeCity.qualityAndEfficiency.superiorSupportOfJudicialCasesRate.evaluation.value =
              formatNumber(cell.v);
            break;
          case 33:
            this.wholeCity.qualityAndEfficiency.judicialCasesSupervisionRate.criminalProtestRate.value =
              formatNumber(cell.v);
            break;
          case 34:
            this.wholeCity.qualityAndEfficiency.judicialCasesSupervisionRate.civilSupervisionRate.value =
              formatNumber(cell.v);
            break;
          case 35:
            this.wholeCity.qualityAndEfficiency.judicialCasesSupervisionRate.administrativeSupervisionRate.value =
              formatNumber(cell.v);
            break;
          case 36:
            this.wholeCity.qualityAndEfficiency.judicialCasesSupervisionRate.criminalAppealRetrialProsecutionSuggestionRate.value =
              formatNumber(cell.v);
            break;
          case 37:
            this.wholeCity.qualityAndEfficiency.judicialCasesSupervisionRate.evaluation.value =
              formatNumber(cell.v);
            break;
          case 38:
            this.wholeCity.qualityAndEfficiency.judicialCasesSupervisionAdoptRate.criminalProtestAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 39:
            this.wholeCity.qualityAndEfficiency.judicialCasesSupervisionAdoptRate.civilProtestChangeRate.value =
              formatNumber(cell.v);
            break;
          case 40:
            this.wholeCity.qualityAndEfficiency.judicialCasesSupervisionAdoptRate.civilRetrialProsecutionSuggestionAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 41:
            this.wholeCity.qualityAndEfficiency.judicialCasesSupervisionAdoptRate.administrativeProtestChangeRate.value =
              formatNumber(cell.v);
            break;
          case 42:
            this.wholeCity.qualityAndEfficiency.judicialCasesSupervisionAdoptRate.administrativeRetrialProsecutionSuggestionAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 43:
            this.wholeCity.qualityAndEfficiency.judicialCasesSupervisionAdoptRate.administrativeDisputeResolutionRate.value =
              formatNumber(cell.v);
            break;
          case 44:
            this.wholeCity.qualityAndEfficiency.judicialCasesSupervisionAdoptRate.civilDisputesupervisorAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 45:
            this.wholeCity.qualityAndEfficiency.judicialCasesSupervisionAdoptRate.administrativesupervisorAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 46:
            this.wholeCity.qualityAndEfficiency.filingSupervisionRate.supervisionFilingRate.value =
              formatNumber(cell.v);
            break;
          case 47:
            this.wholeCity.qualityAndEfficiency.filingSupervisionRate.supervisionWithdrawalRate.value =
              formatNumber(cell.v);
            break;
          case 48:
            this.wholeCity.qualityAndEfficiency.filingSupervisionRate.supervisionFilingImprisonmentRate.value =
              formatNumber(cell.v);
            break;
          case 49:
            this.wholeCity.qualityAndEfficiency.filingSupervisionRate.FillingsupervisionRate.value =
              formatNumber(cell.v);
            break;
          case 50:
            this.wholeCity.qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionRate.illegalInvestigationSupervisionRate.value =
              formatNumber(cell.v);
            break;
          case 51:
            this.wholeCity.qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionRate.illegalTrialSupervisionRate.value =
              formatNumber(cell.v);
            break;
          case 52:
            this.wholeCity.qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionRate.writtenSupervisionOpinionRate.value =
              formatNumber(cell.v);
            break;
          case 53:
            this.wholeCity.qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionRate.writtenSupervisionOpinionOfSeriousIllegalActsInPenalExecutionAndSupervisionRate.value =
              formatNumber(cell.v);
            break;
          case 54:
            this.wholeCity.qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionRate.evaluation.value =
              formatNumber(cell.v);
            break;
          case 55:
            this.wholeCity.qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionAdoptRate.writtenCorrectionOfIllegalInvestigationAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 56:
            this.wholeCity.qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionAdoptRate.illegalTrialSupervisionAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 57:
            this.wholeCity.qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionAdoptRate.writtenSupervisionOpinionAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 58:
            this.wholeCity.qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionAdoptRate.seriousIllegalActsInPenalExecutionAndSupervisionAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 59:
            this.wholeCity.qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionAdoptRate.evaluation.value =
              formatNumber(cell.v);
            break;
          case 60:
            this.wholeCity.qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionRate.illegalCivilTrialSupervisionSuggestionRate.value =
              formatNumber(cell.v);
            break;
          case 61:
            this.wholeCity.qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionRate.civilExecutionSupervisionSuggestionRate.value =
              formatNumber(cell.v);
            break;
          case 62:
            this.wholeCity.qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionRate.illegalAdministrativeTrialSupervisionSuggestionRate.value =
              formatNumber(cell.v);
            break;
          case 63:
            this.wholeCity.qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionRate.administrativeExecutionSupervisionSuggestionRate.value =
              formatNumber(cell.v);
            break;
          case 64:
            this.wholeCity.qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionRate.illegalAdministrativeActSupervisionSuggestionRate.value =
              formatNumber(cell.v);
            break;
          case 65:
            this.wholeCity.qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionRate.evaluation.value =
              formatNumber(cell.v);
            break;
          case 66:
            this.wholeCity.qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionAdoptRate.illegalCivilTrialSupervisionSuggestionAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 67:
            this.wholeCity.qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionAdoptRate.civilExecutionSupervisionSuggestionAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 68:
            this.wholeCity.qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionAdoptRate.illegalAdministrativeTrialSupervisionSuggestionAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 69:
            this.wholeCity.qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionAdoptRate.administrativeExecutionSupervisionSuggestionAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 70:
            this.wholeCity.qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionAdoptRate.illegalAdministrativeActSupervisionSuggestionAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 71:
            this.wholeCity.qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionAdoptRate.illegalExecutionSupervisionSuggestionAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 72:
            this.wholeCity.qualityAndEfficiency.socialGovernanceSupervisionSuggestionRateAndAdoptRate.socialGovernanceSupervisionSuggestionRate.value =
              formatNumber(cell.v);
            break;
          case 73:
            this.wholeCity.qualityAndEfficiency.socialGovernanceSupervisionSuggestionRateAndAdoptRate.socialGovernanceSupervisionSuggestionAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 74:
            this.wholeCity.qualityAndEfficiency.socialGovernanceSupervisionSuggestionRateAndAdoptRate.evaluation.value =
              formatNumber(cell.v);
            break;
          case 75:
            this.wholeCity.qualityAndEfficiency.administrativePublicInterestLitigationPreTrialProcedureRate.preTrialSuggestionRate.value =
              formatNumber(cell.v);
            break;
          case 76:
            this.wholeCity.qualityAndEfficiency.administrativePublicInterestLitigationPreTrialProcedureRate.preTrialSuggestionRectificationRate.value =
              formatNumber(cell.v);
            break;
          case 77:
            this.wholeCity.qualityAndEfficiency.administrativePublicInterestLitigationPreTrialProcedureRate.evaluation.value =
              formatNumber(cell.v);
            break;
          case 78:
            this.wholeCity.qualityAndEfficiency.missedArrestAndProsecutionCorrectionRate.missedArrestAndProsecutionCorrectionRate.value =
              formatNumber(cell.v);
            break;
          case 79:
            this.wholeCity.qualityAndEfficiency.missedArrestAndProsecutionCorrectionRate.missedArrestAndProsecutionCorrectionImprisonmentRate.value =
              formatNumber(cell.v);
            break;
          case 80:
            this.wholeCity.qualityAndEfficiency.missedArrestAndProsecutionCorrectionRate.evaluation.value =
              formatNumber(cell.v);
            break;
          case 81:
            this.wholeCity.qualityAndEfficiency.recoverAndCompensate.recoverAndCompensateWorkingRate.value =
              formatNumber(cell.v);
            break;
          case 82:
            this.wholeCity.qualityAndEfficiency.recoverAndCompensate.averageRecoverAmount.value =
              formatNumber(cell.v);
            break;
          case 83:
            this.wholeCity.qualityAndEfficiency.recoverAndCompensate.recoverAndCompensateRate.value =
              formatNumber(cell.v);
            break;
          case 84:
            this.wholeCity.qualityAndEfficiency.recoverAndCompensate.evaluation.value =
              formatNumber(cell.v);
            break;
          case 85:
            this.wholeCity.qualityAndEfficiency.confessionAndPunishment.confessionAndPunishmentRate.value =
              formatNumber(cell.v);
            break;
          case 86:
            this.wholeCity.qualityAndEfficiency.confessionAndPunishment.punishmentSuggestionAdoptRate.value =
              formatNumber(cell.v);
            break;
          case 87:
            this.wholeCity.qualityAndEfficiency.confessionAndPunishment.evaluation.value =
              formatNumber(cell.v);
            break;
          case 88:
            this.wholeCity.qualityAndEfficiency.preTrialDetentionRate.value =
              formatNumber(cell.v);
            break;
          case 89:
            this.wholeCity.qualityAndEfficiency.moneyLaunderingAndUpstreamCrimeRatio.value =
              formatNumber(cell.v);
            break;
          case 90:
            this.wholeCity.qualityAndEfficiency.specialMetrics.conditionalNonProsecutionRate.value =
              formatNumber(cell.v);
            break;
          case 91:
            this.wholeCity.qualityAndEfficiency.specialMetrics.comprehensivePerformanceRate.value =
              formatNumber(cell.v);
            break;
          case 92:
            this.wholeCity.qualityAndEfficiency.specialMetrics.evaluation.value =
              formatNumber(cell.v);
            break;
          case 93:
            this.wholeCity.qualityAndEfficiency.judicialAidRate.value =
              formatNumber(cell.v);
            break;
          case 94:
            this.wholeCity.qualityAndEfficiency.digitalContributionRate.bigDataClueAcceptedRate.value =
              formatNumber(cell.v);
            break;
          case 95:
            this.wholeCity.qualityAndEfficiency.digitalContributionRate.bigDataClueMakeUpCaseRate.value =
              formatNumber(cell.v);
            break;
          case 96:
            this.wholeCity.qualityAndEfficiency.digitalContributionRate.bigDataClueCaseRate.value =
              formatNumber(cell.v);
            break;
          case 97:
            this.wholeCity.qualityAndEfficiency.digitalContributionRate.evaluation.value =
              formatNumber(cell.v);
            break;
          case 98:
            this.wholeCity.qualityAndEfficiency.caseReleaseCount.value =
              formatNumber(cell.v);
            break;
          case 99:
            this.wholeCity.qualityAndEfficiency.businessInformationErrorRate.caseInformationErrorRate.value =
              formatNumber(cell.v);
            break;
          case 100:
            this.wholeCity.qualityAndEfficiency.businessInformationErrorRate.clueInformationErrorRate.value =
              formatNumber(cell.v);
            break;
          case 101:
            this.wholeCity.qualityAndEfficiency.businessInformationErrorRate.evaluation.value =
              formatNumber(cell.v);
            break;
          case 102:
            this.wholeCity.fourMainDistribution.criminal.count.value =
              formatNumber(cell.v);
            break;
          case 103:
            this.wholeCity.fourMainDistribution.criminal.percentage.value =
              formatNumber(cell.v);
            break;
          case 104:
            this.wholeCity.fourMainDistribution.civil.count.value =
              formatNumber(cell.v);
            break;
          case 105:
            this.wholeCity.fourMainDistribution.civil.percentage.value =
              formatNumber(cell.v);
            break;
          case 106:
            this.wholeCity.fourMainDistribution.administrative.count.value =
              formatNumber(cell.v);
            break;
          case 107:
            this.wholeCity.fourMainDistribution.administrative.percentage.value =
              formatNumber(cell.v);
            break;
          case 108:
            this.wholeCity.fourMainDistribution.publicInterestLitigation.count.value =
              formatNumber(cell.v);
            break;
          case 109:
            this.wholeCity.fourMainDistribution.publicInterestLitigation.percentage.value =
              formatNumber(cell.v);
            break;
          case 110:
            this.wholeCity.judicialAndSupervisionCaseHandlingStructure.judicialCaseHandlingRate.value =
              formatNumber(cell.v);
            break;
          case 111:
            this.wholeCity.judicialAndSupervisionCaseHandlingStructure.supervisionCaseHandlingRate.value =
              formatNumber(cell.v);
            break;
          case 112:
            this.wholeCity.businessSourceStructure.superviseByPower.count.value =
              formatNumber(cell.v);
            break;
          case 113:
            this.wholeCity.businessSourceStructure.superviseByPower.yearOnYear.value =
              formatNumber(cell.v);
            break;
          case 114:
            this.wholeCity.businessSourceStructure.superviseByPower.percentage.value =
              formatNumber(cell.v);
            break;
          case 115:
            this.wholeCity.businessSourceStructure.superviseByApplication.count.value =
              formatNumber(cell.v);
            break;
          case 116:
            this.wholeCity.businessSourceStructure.superviseByApplication.yearOnYear.value =
              formatNumber(cell.v);
            break;
          case 117:
            this.wholeCity.businessSourceStructure.superviseByApplication.percentage.value =
              formatNumber(cell.v);
            break;
          case 118:
            this.wholeCity.businessSourceStructure.acceptByTransfer.count.value =
              formatNumber(cell.v);
            break;
          case 119:
            this.wholeCity.businessSourceStructure.acceptByTransfer.yearOnYear.value =
              formatNumber(cell.v);
            break;
          case 120:
            this.wholeCity.businessSourceStructure.acceptByTransfer.percentage.value =
              formatNumber(cell.v);
            break;
          case 121:
            this.wholeCity.clueBidirectionalTransfer.clueAccept.count.value =
              formatNumber(cell.v);
            break;
          case 122:
            this.wholeCity.clueBidirectionalTransfer.clueAccept.caseRate.value =
              formatNumber(cell.v);
            break;
          case 123:
            this.wholeCity.clueBidirectionalTransfer.clueAccept.fourMainPercentage.value =
              formatNumber(cell.v);
            break;
          case 124:
            this.wholeCity.clueBidirectionalTransfer.internalTransfer.count.value =
              formatNumber(cell.v);
            break;
          case 125:
            this.wholeCity.clueBidirectionalTransfer.internalTransfer.caseRate.value =
              formatNumber(cell.v);
            break;
          case 126:
            this.wholeCity.clueBidirectionalTransfer.internalTransfer.fourMainPercentage.value =
              formatNumber(cell.v);
            break;
          case 127:
            this.wholeCity.clueBidirectionalTransfer.externalTransfer.count.value =
              formatNumber(cell.v);
            break;
          case 128:
            this.wholeCity.clueBidirectionalTransfer.externalTransfer.caseRate.value =
              formatNumber(cell.v);
            break;
          case 129:
            this.wholeCity.clueBidirectionalTransfer.externalTransfer.fourMainPercentage.value =
              formatNumber(cell.v);
            break;
          case 130:
            this.wholeCity.clueBidirectionalTransfer.transferToSelfInvestigation.value =
              formatNumber(cell.v);
            break;
          case 131:
            this.wholeCity.clueBidirectionalTransfer.publicInterestLitigationCaseRate.civilProsecutionRate.value =
              formatNumber(cell.v);
            break;
          case 132:
            this.wholeCity.clueBidirectionalTransfer.publicInterestLitigationCaseRate.administrativeCaseFilingRate.value =
              formatNumber(cell.v);
            break;
          case 133:
            this.wholeCity.clueBidirectionalTransfer.publicInterestLitigationCaseRate.administrativeCaseRate.value =
              formatNumber(cell.v);
            break;
          case 134:
            this.wholeCity.clueBidirectionalTransfer.publicInterestLitigationCaseRate.evaluation.value =
              formatNumber(cell.v);
            break;
          case 135:
            this.wholeCity.perCapitaCaseHandling.actualPerCapitaCaseHandling.value =
              formatNumber(cell.v);
            break;
          case 136:
            this.wholeCity.perCapitaCaseHandling.actualPerCapitaCaseHandlingOfProsecutors.value =
              formatNumber(cell.v);
            break;
          case 137:
            this.wholeCity.perCapitaCaseHandling.perCapitaCaseHandlingOfProsecutors.value =
              formatNumber(cell.v);
            break;
          case 138:
            this.wholeCity.perCapitaCaseHandling.perCapitaCaseHandlingOfProsecutorsYearOnYear.value =
              formatNumber(cell.v);
            break;
          // 20230526新增末尾两列
          case 139:
            this.wholeCity.qualityAndEfficiency.socialGovernanceSupervisionSuggestionRateAndAdoptRate.averageNumberOfPeopleSupervisorsPerCase.value =
              formatNumber(cell.v);
            break;
          case 140:
            this.wholeCity.qualityAndEfficiency.socialGovernanceSupervisionSuggestionRateAndAdoptRate.caseProsecutionHearing.value =
              formatNumber(cell.v);
            break;
          // 20230910末尾新增4列
          case 141:
            this.wholeCity.qualityAndEfficiency.noArrestRate.value =
              formatNumber(cell.v);
            break;
          case 142:
            this.wholeCity.qualityAndEfficiency.noAppealRate.value =
              formatNumber(cell.v);
            break;
          case 143:
            this.wholeCity.qualityAndEfficiency.publicInterestCaseCount.value =
              formatNumber(cell.v);
            break;
          case 144:
            this.wholeCity.qualityAndEfficiency.companyComplianceCaseRatio.value =
              formatNumber(cell.v);
            break;
            //新增的两个case
          case 145:
            this.wholeCity.qualityAndEfficiency.specialMetrics.comprehensivePerformanceRateknowledge.value =
              formatNumber(cell.v);
            break;
          case 146:
            this.wholeCity.qualityAndEfficiency.specialMetrics.comprehensivePerformanceRatenot.value =
              formatNumber(cell.v);
            break;
        }
      }
    },
    loadDoubleRow(field, index, fromRowCount) {
      let obj = [];
      switch (field) {
        case 1:
          obj = this.branchCourtWithDistrict;
          break;
        case 2:
          obj = this.branchCourt;
          break;
        case 3:
          obj = this.jurisdictionCourt;
          break;
        case 4:
          obj = this.railwayCourt;
          break;
        case 5:
          obj = this.dispatchCourt;
          break;
      }

      const nameIndex = utils.encode_cell({ c: 0, r: fromRowCount });
      const rankIndex = utils.encode_cell({ c: 1, r: fromRowCount });
      const totalScoreIndex = utils.encode_cell({ c: 2, r: fromRowCount });
      const nameCell = this.sheet[nameIndex];
      const rankCell = this.sheet[rankIndex];
      const totalScoreCell = this.sheet[totalScoreIndex];
      obj[index].name = formatString(nameCell.v);
      obj[index].rank = formatNumber(rankCell.v);
      obj[index].totalScore = formatNumber(totalScoreCell.v);

      for (let col = 3; col <= utils.decode_col("EQ"); col++) {
        const valueIndex = utils.encode_cell({ c: col, r: fromRowCount });
        const scoreIndex = utils.encode_cell({ c: col, r: fromRowCount + 1 });

        let valueCell = this.sheet[valueIndex];
        if (valueCell === undefined) {
          valueCell = { v: 0 };
        }

        let scoreCell = this.sheet[scoreIndex];
        if (scoreCell === undefined) {
          scoreCell = { v: 0 };
        }

        switch (col) {
          case 3:
            obj[index].caseAccepted.fourMainCaseCount = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 4:
            obj[index].caseAccepted.fourMainCasePercentage = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 5:
            obj[index].caseHandled.finishedCount = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 6:
            obj[index].caseHandled.finishedPercentage = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 7:
            obj[index].caseHandled.finishedRate = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 8:
            obj[index].caseHandled.unfinishedCount = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 9:
            obj[index].caseHandled.administratorInvolvedRate = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 10:
            obj[
              index
            ].qualityAndEfficiency.caseDistribution.proportionOfCriminalCases =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 11:
            obj[
              index
            ].qualityAndEfficiency.caseDistribution.proportionOfCivilCases = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 12:
            obj[
              index
            ].qualityAndEfficiency.caseDistribution.proportionOfAdministrativeCases =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 13:
            obj[
              index
            ].qualityAndEfficiency.caseDistribution.proportionOfPublicInterestCases =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 14:
            obj[index].qualityAndEfficiency.caseDistribution.evaluation = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 15:
            obj[
              index
            ].qualityAndEfficiency.noArrestNoAppealReconsiderationReviewChangeRate.noArrestReconsiderationReviewChangeRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 16:
            obj[
              index
            ].qualityAndEfficiency.noArrestNoAppealReconsiderationReviewChangeRate.noAppealReconsiderationReviewChangeRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 17:
            obj[
              index
            ].qualityAndEfficiency.noArrestNoAppealReconsiderationReviewChangeRate.evaluation =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 18:
            obj[
              index
            ].qualityAndEfficiency.noProsecutionAfterArrestAndExemptionFromCriminalPunishmentRate.noProsecutionAfterArrestRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 19:
            obj[
              index
            ].qualityAndEfficiency.noProsecutionAfterArrestAndExemptionFromCriminalPunishmentRate.exemptionFromCriminalPunishmentRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 20:
            obj[
              index
            ].qualityAndEfficiency.noProsecutionAfterArrestAndExemptionFromCriminalPunishmentRate.evaluation =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 21:
            obj[
              index
            ].qualityAndEfficiency.withdrawalOfProsecutionAndAcquittalRate.withdrawalOfProsecutionRateandacquittalrate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 22:
            obj[
              index
            ].qualityAndEfficiency.withdrawalOfProsecutionAndAcquittalRate.withdrawalOfProsecutionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 23:
            obj[
              index
            ].qualityAndEfficiency.withdrawalOfProsecutionAndAcquittalRate.AcquittalRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 24:
            obj[
              index
            ].qualityAndEfficiency.directFilingAndInvestigationCount.directFilingAndInvestigationCaseCount =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 25:
            obj[
              index
            ].qualityAndEfficiency.directFilingAndInvestigationCount.directFilingAndInvestigationPeopleCount =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 26:
            obj[
              index
            ].qualityAndEfficiency.directFilingAndInvestigationCount.evaluation =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 27:
            obj[
              index
            ].qualityAndEfficiency.superiorSupportOfJudicialCasesRate.criminalProtestAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 28:
            obj[
              index
            ].qualityAndEfficiency.superiorSupportOfJudicialCasesRate.civilProtestAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 29:
            obj[
              index
            ].qualityAndEfficiency.superiorSupportOfJudicialCasesRate.administrativeProtestAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 30:
            obj[
              index
            ].qualityAndEfficiency.superiorSupportOfJudicialCasesRate.criminalAppealCorrectionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 31:
            obj[
              index
            ].qualityAndEfficiency.superiorSupportOfJudicialCasesRate.stateCompensationChangeRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 32:
            obj[
              index
            ].qualityAndEfficiency.superiorSupportOfJudicialCasesRate.evaluation =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 33:
            obj[
              index
            ].qualityAndEfficiency.judicialCasesSupervisionRate.criminalProtestRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 34:
            obj[
              index
            ].qualityAndEfficiency.judicialCasesSupervisionRate.civilSupervisionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 35:
            obj[
              index
            ].qualityAndEfficiency.judicialCasesSupervisionRate.administrativeSupervisionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 36:
            obj[
              index
            ].qualityAndEfficiency.judicialCasesSupervisionRate.criminalAppealRetrialProsecutionSuggestionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 37:
            obj[
              index
            ].qualityAndEfficiency.judicialCasesSupervisionRate.evaluation = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 38:
            obj[
              index
            ].qualityAndEfficiency.judicialCasesSupervisionAdoptRate.criminalProtestAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 39:
            obj[
              index
            ].qualityAndEfficiency.judicialCasesSupervisionAdoptRate.civilProtestChangeRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 40:
            obj[
              index
            ].qualityAndEfficiency.judicialCasesSupervisionAdoptRate.civilRetrialProsecutionSuggestionAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 41:
            obj[
              index
            ].qualityAndEfficiency.judicialCasesSupervisionAdoptRate.administrativeProtestChangeRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 42:
            obj[
              index
            ].qualityAndEfficiency.judicialCasesSupervisionAdoptRate.administrativeRetrialProsecutionSuggestionAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 43:
            obj[
              index
            ].qualityAndEfficiency.judicialCasesSupervisionAdoptRate.administrativeDisputeResolutionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 44:
            obj[
              index
            ].qualityAndEfficiency.judicialCasesSupervisionAdoptRate.civilDisputesupervisorAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 45:
            obj[
              index
            ].qualityAndEfficiency.judicialCasesSupervisionAdoptRate.administrativesupervisorAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 46:
            obj[
              index
            ].qualityAndEfficiency.filingSupervisionRate.supervisionFilingRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 47:
            obj[
              index
            ].qualityAndEfficiency.filingSupervisionRate.supervisionWithdrawalRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 48:
            obj[
              index
            ].qualityAndEfficiency.filingSupervisionRate.supervisionFilingImprisonmentRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 49:
            obj[index].qualityAndEfficiency.filingSupervisionRate.FillingsupervisionRate = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 50:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionRate.illegalInvestigationSupervisionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 51:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionRate.illegalTrialSupervisionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 52:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionRate.writtenSupervisionOpinionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 53:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionRate.writtenSupervisionOpinionOfSeriousIllegalActsInPenalExecutionAndSupervisionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 54:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionRate.evaluation =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 55:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionAdoptRate.writtenCorrectionOfIllegalInvestigationAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 56:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionAdoptRate.illegalTrialSupervisionAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 57:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionAdoptRate.writtenSupervisionOpinionAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 58:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionAdoptRate.seriousIllegalActsInPenalExecutionAndSupervisionAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 59:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCriminalSupervisionOpinionAdoptRate.evaluation =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 60:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionRate.illegalCivilTrialSupervisionSuggestionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 61:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionRate.civilExecutionSupervisionSuggestionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 62:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionRate.illegalAdministrativeTrialSupervisionSuggestionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 63:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionRate.administrativeExecutionSupervisionSuggestionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 64:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionRate.illegalAdministrativeActSupervisionSuggestionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 65:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionRate.evaluation =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 66:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionAdoptRate.illegalCivilTrialSupervisionSuggestionAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 67:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionAdoptRate.civilExecutionSupervisionSuggestionAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 68:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionAdoptRate.illegalAdministrativeTrialSupervisionSuggestionAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 69:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionAdoptRate.administrativeExecutionSupervisionSuggestionAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 70:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionAdoptRate.illegalAdministrativeActSupervisionSuggestionAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 71:
            obj[
              index
            ].qualityAndEfficiency.nonJudicialCivilAdministrativeSupervisionOpinionAdoptRate.illegalExecutionSupervisionSuggestionAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 72:
            obj[
              index
            ].qualityAndEfficiency.socialGovernanceSupervisionSuggestionRateAndAdoptRate.socialGovernanceSupervisionSuggestionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 73:
            obj[
              index
            ].qualityAndEfficiency.socialGovernanceSupervisionSuggestionRateAndAdoptRate.socialGovernanceSupervisionSuggestionAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 74:
            obj[
              index
            ].qualityAndEfficiency.socialGovernanceSupervisionSuggestionRateAndAdoptRate.evaluation =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 75:
            obj[
              index
            ].qualityAndEfficiency.administrativePublicInterestLitigationPreTrialProcedureRate.preTrialSuggestionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 76:
            obj[
              index
            ].qualityAndEfficiency.administrativePublicInterestLitigationPreTrialProcedureRate.preTrialSuggestionRectificationRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 77:
            obj[
              index
            ].qualityAndEfficiency.administrativePublicInterestLitigationPreTrialProcedureRate.evaluation =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 78:
            obj[
              index
            ].qualityAndEfficiency.missedArrestAndProsecutionCorrectionRate.missedArrestAndProsecutionCorrectionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 79:
            obj[
              index
            ].qualityAndEfficiency.missedArrestAndProsecutionCorrectionRate.missedArrestAndProsecutionCorrectionImprisonmentRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 80:
            obj[
              index
            ].qualityAndEfficiency.missedArrestAndProsecutionCorrectionRate.evaluation =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 81:
            obj[
              index
            ].qualityAndEfficiency.recoverAndCompensate.recoverAndCompensateWorkingRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 82:
            obj[
              index
            ].qualityAndEfficiency.recoverAndCompensate.averageRecoverAmount = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 83:
            obj[
              index
            ].qualityAndEfficiency.recoverAndCompensate.recoverAndCompensateRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 84:
            obj[index].qualityAndEfficiency.recoverAndCompensate.evaluation = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 85:
            obj[
              index
            ].qualityAndEfficiency.confessionAndPunishment.confessionAndPunishmentRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 86:
            obj[
              index
            ].qualityAndEfficiency.confessionAndPunishment.punishmentSuggestionAdoptRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 87:
            obj[index].qualityAndEfficiency.confessionAndPunishment.evaluation =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 88:
            obj[index].qualityAndEfficiency.preTrialDetentionRate = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 89:
            obj[
              index
            ].qualityAndEfficiency.moneyLaunderingAndUpstreamCrimeRatio = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 90:
            obj[
              index
            ].qualityAndEfficiency.specialMetrics.conditionalNonProsecutionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 91:
            obj[
              index
            ].qualityAndEfficiency.specialMetrics.comprehensivePerformanceRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 92:
            obj[index].qualityAndEfficiency.specialMetrics.evaluation = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 93:
            obj[index].qualityAndEfficiency.judicialAidRate = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 94:
            obj[
              index
            ].qualityAndEfficiency.digitalContributionRate.bigDataClueAcceptedRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 95:
            obj[
              index
            ].qualityAndEfficiency.digitalContributionRate.bigDataClueMakeUpCaseRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 96:
            obj[
              index
            ].qualityAndEfficiency.digitalContributionRate.bigDataClueCaseRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 97:
            obj[index].qualityAndEfficiency.digitalContributionRate.evaluation =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 98:
            obj[index].qualityAndEfficiency.caseReleaseCount = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 99:
            obj[
              index
            ].qualityAndEfficiency.businessInformationErrorRate.caseInformationErrorRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 100:
            obj[
              index
            ].qualityAndEfficiency.businessInformationErrorRate.clueInformationErrorRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 101:
            obj[
              index
            ].qualityAndEfficiency.businessInformationErrorRate.evaluation = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 102:
            obj[index].fourMainDistribution.criminal.count = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 103:
            obj[index].fourMainDistribution.criminal.percentage = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 104:
            obj[index].fourMainDistribution.civil.count = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 105:
            obj[index].fourMainDistribution.civil.percentage = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 106:
            obj[index].fourMainDistribution.administrative.count = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 107:
            obj[index].fourMainDistribution.administrative.percentage = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 108:
            obj[index].fourMainDistribution.publicInterestLitigation.count = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 109:
            obj[
              index
            ].fourMainDistribution.publicInterestLitigation.percentage = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 110:
            obj[
              index
            ].judicialAndSupervisionCaseHandlingStructure.judicialCaseHandlingRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 111:
            obj[
              index
            ].judicialAndSupervisionCaseHandlingStructure.supervisionCaseHandlingRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 112:
            obj[index].businessSourceStructure.superviseByPower.count = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 113:
            obj[index].businessSourceStructure.superviseByPower.yearOnYear = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 114:
            obj[index].businessSourceStructure.superviseByPower.percentage = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 115:
            obj[index].businessSourceStructure.superviseByApplication.count = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 116:
            obj[
              index
            ].businessSourceStructure.superviseByApplication.yearOnYear = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 117:
            obj[
              index
            ].businessSourceStructure.superviseByApplication.percentage = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 118:
            obj[index].businessSourceStructure.acceptByTransfer.count = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 119:
            obj[index].businessSourceStructure.acceptByTransfer.yearOnYear = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 120:
            obj[index].businessSourceStructure.acceptByTransfer.percentage = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 121:
            obj[index].clueBidirectionalTransfer.clueAccept.count = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 122:
            obj[index].clueBidirectionalTransfer.clueAccept.caseRate = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 123:
            obj[index].clueBidirectionalTransfer.clueAccept.fourMainPercentage =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 124:
            obj[index].clueBidirectionalTransfer.internalTransfer.count = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 125:
            obj[index].clueBidirectionalTransfer.internalTransfer.caseRate = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 126:
            obj[
              index
            ].clueBidirectionalTransfer.internalTransfer.fourMainPercentage = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 127:
            obj[index].clueBidirectionalTransfer.externalTransfer.count = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 128:
            obj[index].clueBidirectionalTransfer.externalTransfer.caseRate = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 129:
            obj[
              index
            ].clueBidirectionalTransfer.externalTransfer.fourMainPercentage = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 130:
            obj[index].clueBidirectionalTransfer.transferToSelfInvestigation = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 131:
            obj[
              index
            ].clueBidirectionalTransfer.publicInterestLitigationCaseRate.civilProsecutionRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 132:
            obj[
              index
            ].clueBidirectionalTransfer.publicInterestLitigationCaseRate.administrativeCaseFilingRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 133:
            obj[
              index
            ].clueBidirectionalTransfer.publicInterestLitigationCaseRate.administrativeCaseRate =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 134:
            obj[
              index
            ].clueBidirectionalTransfer.publicInterestLitigationCaseRate.evaluation =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 135:
            obj[index].perCapitaCaseHandling.actualPerCapitaCaseHandling = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 136:
            obj[
              index
            ].perCapitaCaseHandling.actualPerCapitaCaseHandlingOfProsecutors = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 137:
            obj[
              index
            ].perCapitaCaseHandling.perCapitaCaseHandlingOfProsecutors = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 138:
            obj[
              index
            ].perCapitaCaseHandling.perCapitaCaseHandlingOfProsecutorsYearOnYear =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          // 20230526新增末尾两列
          case 139:
            obj[
              index
            ].qualityAndEfficiency.socialGovernanceSupervisionSuggestionRateAndAdoptRate.averageNumberOfPeopleSupervisorsPerCase =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          case 140:
            obj[
              index
            ].qualityAndEfficiency.socialGovernanceSupervisionSuggestionRateAndAdoptRate.caseProsecutionHearing =
              {
                value: formatNumber(valueCell.v),
                score: formatNumber(scoreCell.v),
              };
            break;
          // 20230910末尾新增4列
          case 141:
            obj[index].qualityAndEfficiency.noArrestRate = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 142:
            obj[index].qualityAndEfficiency.noAppealRate = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 143:
            obj[index].qualityAndEfficiency.publicInterestCaseCount = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 144:
          obj[index].qualityAndEfficiency.companyComplianceCaseRatio = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
            break;
            // 2024.2.4新增两列
          case 145:
            obj[index].qualityAndEfficiency.specialMetrics.comprehensivePerformanceRateknowledge = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
          case 146:
            obj[index].qualityAndEfficiency.specialMetrics.comprehensivePerformanceRatenot = {
              value: formatNumber(valueCell.v),
              score: formatNumber(scoreCell.v),
            };
            break;
        }
      }
    },
    loadCourtData() {
      for (let i = 0; i < 4; ++i) {
        this.loadDoubleRow(1, i, 6 + 2 * i);
      }

      for (let i = 0; i < 4; ++i) {
        this.loadDoubleRow(2, i, 14 + 2 * i);
      }

      for (let i = 0; i < 16; ++i) {
        this.loadDoubleRow(3, i, 22 + 2 * i);
      }

      for (let i = 0; i < 3; ++i) {
        this.loadDoubleRow(4, i, 54 + 2 * i);
      }

      for (let i = 0; i < 2; ++i) {
        this.loadDoubleRow(5, i, 60 + 2 * i);
      }
    },
    drawRankFigure(field) {
      let data = [];
      let option = {};
      this.rankFigure ??= echarts.init(document.getElementById("rank-figure"));
      this.rankFigure?.clear();

      switch (field) {
        case 1:
          data = data.concat(this.branchCourtWithDistrict);
          break;
        case 2:
          data = data.concat(this.branchCourt);
          break;
        case 3:
          data = data.concat(this.jurisdictionCourt);
          break;
        case 4:
          data = data.concat(this.railwayCourt);
          break;
        case 5:
          data = data.concat(this.dispatchCourt);
          break;
      }

      data = data.map((item) => {
        return {
          name: item.name,
          rank: item.rank,
          score: item.totalScore,
        };
      });

      const scores = data.map((item) => item.score);
      const maxScore = Math.max(...scores);
      const minScore = Math.min(...scores);

      if (field != 3) {
        option = {
          xAxis: {
            type: "category",
            data: data.map((item) => item.name),
            axisLabel: {
              interval: 0,
              rotate: 20,
            },
          },
          yAxis: {
            type: "value",
            name: "总分",
            nameLocation: "middle",
            nameGap: 50,
            nameTextStyle: {
              fontSize: 16,
            },
            axisLabel: {
              rotate: 20,
            },
            min: Math.round(Math.max(0, minScore - 100)),
            max: Math.round(maxScore + 10),
            interval: 100,
          },
          series: [
            {
              data: data.map((item) => {
                return {
                  name: item.name,
                  value: item.score,
                };
              }),
              type: "bar",
              label: {
                show: true,
                valueAnimation: true,
                rotate: 20,
              },
            },
          ],
        };
      } else {
        echarts.registerMap("Beijing", geoJson);

        option = {
          tooltip: {
            show: true,
          },
          visualMap: {
            type: "piecewise",
            min: 1,
            max: 4,
            show: false,
            showLabel: false,
            pieces: [
              {
                // 第一档次
                value: 1,
                color: "#8CCF9F",
              },
              {
                value: 2,
                color: "#4F87F8",
              },
              {
                value: 3,
                color: "#FFD74D",
              },
              {
                value: 4,
                color: "#FF933C",
              },
            ],
          },
          series: [
            {
              name: "北京市",
              type: "map",
              map: "Beijing",
              label: {
                show: false,
              },
              emphasis: {
                itemStyle: {
                  areaColor: "#FFFFFF",
                },
              },
              select: {
                itemStyle: {
                  areaColor: "#FFFFFF",
                },
              },
              data: data.map((item) => {
                return {
                  name: item.name,
                  value: item.rank,
                  score: item.score,
                  tooltip: {
                    trigger: "item",
                    show: true,
                    formatter: `{b}<br/>${item.score}分<br/>第{c}档`,
                  },
                };
              }),
              nameMap: {
                东城区: "东城院",
                西城区: "西城院",
                朝阳区: "朝阳院",
                丰台区: "丰台院",
                石景山区: "石景山院",
                海淀区: "海淀院",
                门头沟区: "门头沟院",
                房山区: "房山院",
                通州区: "通州院",
                顺义区: "顺义院",
                昌平区: "昌平院",
                大兴区: "大兴院",
                怀柔区: "怀柔院",
                平谷区: "平谷院",
                密云区: "密云院",
                延庆区: "延庆院",
              },
            },
          ],
        };
      }

      this.rankFigure.setOption(option);
    },
    rankFieldChange(field) {
      this.drawRankFigure(field);
    },
    structureDistributionFieldChange(field) {
      this.drawStructureDistributionFigure(field);
    },
    drawStructureDistributionFigure(field) {
      this.structureDistributionFigure ??= echarts.init(
        document.getElementById("structure-distribution-figure")
      );
      this.structureDistributionFigure?.clear();

      let data = [];
      switch (field) {
        case 1:
          data = [
            {
              name: "刑事",
              value:
                this.currentObject.fourMainDistribution.criminal.count.value,
              label: {
                show: false,
              },
            },
            {
              name: "民事",
              value: this.currentObject.fourMainDistribution.civil.count.value,
              label: {
                show: false,
              },
            },
            {
              name: "行政",
              value:
                this.currentObject.fourMainDistribution.administrative.count
                  .value,
              label: {
                show: false,
              },
            },
            {
              name: "公益诉讼",
              value:
                this.currentObject.fourMainDistribution.publicInterestLitigation
                  .count.value,
              label: {
                show: false,
              },
            },
          ];
          break;
        case 2:
          data = [
            {
              name: "移送",
              value:
                this.currentObject.businessSourceStructure.acceptByTransfer
                  .count.value,
              label: {
                show: false,
              },
            },
            {
              name: "申请",
              value:
                this.currentObject.businessSourceStructure
                  .superviseByApplication.count.value,
              label: {
                show: false,
              },
            },
            {
              name: "职权",
              value:
                this.currentObject.businessSourceStructure.superviseByPower
                  .count.value,
              label: {
                show: false,
              },
            },
          ];
          break;
        case 3:
          data = [
            {
              name: "司法",
              value:
                this.currentObject.judicialAndSupervisionCaseHandlingStructure
                  .judicialCaseHandlingRate.value,
              label: {
                show: false,
              },
            },
            {
              name: "监督",
              value:
                this.currentObject.judicialAndSupervisionCaseHandlingStructure
                  .supervisionCaseHandlingRate.value,
              label: {
                show: false,
              },
            },
          ];
          break;
      }
      let option = {
        series: [
          {
            type: "pie",
            data: data,
            silent: true,
            radius: ["50%", "70%"],
          },
        ],
      };

      this.structureDistributionFigure.setOption(option);
    },
    sortedArrayWithStructureDistribution(filed) {
      let data = [];
      let mappedData = [];
      data = data.concat(this.comparisonRange);

      switch (filed) {
        case 1:
          data.sort((a, b) => {
            const scoreA =
              a.fourMainDistribution.criminal.percentage.score +
              a.fourMainDistribution.civil.percentage.score +
              a.fourMainDistribution.administrative.percentage.score +
              a.fourMainDistribution.publicInterestLitigation.percentage.score;

            const scoreB =
              b.fourMainDistribution.criminal.percentage.score +
              b.fourMainDistribution.civil.percentage.score +
              b.fourMainDistribution.administrative.percentage.score +
              b.fourMainDistribution.publicInterestLitigation.percentage.score;

            return scoreB - scoreA;
          });

          mappedData = data.map((i) => {
            return {
              name: i.name,
              display: `${i.fourMainDistribution.criminal.percentage.value}% : ${i.fourMainDistribution.civil.percentage.value}% : ${i.fourMainDistribution.administrative.percentage.value}% : ${i.fourMainDistribution.publicInterestLitigation.percentage.value}%`,
            };
          });
          break;
        case 2:
          data.sort((a, b) => {
            const scoreA =
              a.businessSourceStructure.superviseByPower.percentage.score +
              a.businessSourceStructure.superviseByPower.yearOnYear.score +
              a.businessSourceStructure.superviseByApplication.percentage
                .score +
              a.businessSourceStructure.superviseByApplication.yearOnYear
                .score +
              a.businessSourceStructure.acceptByTransfer.percentage.score +
              a.businessSourceStructure.acceptByTransfer.yearOnYear.score;

            const scoreB =
              b.businessSourceStructure.superviseByPower.percentage.score +
              b.businessSourceStructure.superviseByPower.yearOnYear.score +
              b.businessSourceStructure.superviseByApplication.percentage
                .score +
              b.businessSourceStructure.superviseByApplication.yearOnYear
                .score +
              b.businessSourceStructure.acceptByTransfer.percentage.score +
              b.businessSourceStructure.acceptByTransfer.yearOnYear.score;

            return scoreB - scoreA;
          });

          mappedData = data.map((i) => {
            return {
              name: i.name,
              display: `${i.businessSourceStructure.acceptByTransfer.percentage.value}% : ${i.businessSourceStructure.superviseByApplication.percentage.value}% : ${i.businessSourceStructure.superviseByPower.percentage.value}%`,
            };
          });

          break;
        case 3:
          data.sort((a, b) => {
            const scoreA =
              a.judicialAndSupervisionCaseHandlingStructure
                .judicialCaseHandlingRate.score +
              a.judicialAndSupervisionCaseHandlingStructure
                .supervisionCaseHandlingRate.score;

            const scoreB =
              b.judicialAndSupervisionCaseHandlingStructure
                .judicialCaseHandlingRate.score +
              b.judicialAndSupervisionCaseHandlingStructure
                .supervisionCaseHandlingRate.score;

            return scoreB - scoreA;
          });

          mappedData = data.map((i) => {
            return {
              name: i.name,
              display: `${i.judicialAndSupervisionCaseHandlingStructure.judicialCaseHandlingRate.value}% : ${i.judicialAndSupervisionCaseHandlingStructure.supervisionCaseHandlingRate.value}%`,
            };
          });
          break;
      }

      return mappedData.slice(0, this.division.firstFlag);
    },
    sortedArrayWithDigitalCase() {
      let data = [];
      data = data.concat(this.comparisonRange);

      data.sort((a, b) => {
        return (
          b.qualityAndEfficiency.digitalContributionRate.evaluation.score -
          a.qualityAndEfficiency.digitalContributionRate.evaluation.score
        );
      });

      let mappedData = data.map((i) => {
        return {
          name: i.name,
          display: `${i.qualityAndEfficiency.digitalContributionRate.bigDataClueAcceptedRate.value}% : ${i.qualityAndEfficiency.digitalContributionRate.bigDataClueMakeUpCaseRate.value}% : ${i.qualityAndEfficiency.digitalContributionRate.bigDataClueCaseRate.value}%`,
        };
      });

      return mappedData.slice(0, this.division.firstFlag);
    },
    sortedArrayWithAcceptCount() {
      let data = [];
      data = data.concat(this.comparisonRange);

      data.sort((a, b) => {
        return (
          b.caseAccepted.fourMainCaseCount.value -
          a.caseAccepted.fourMainCaseCount.value
        );
      });

      let mappedData = data.map((i) => {
        return {
          name: i.name,
          count: i.caseAccepted.fourMainCaseCount.value,
          percentage: i.caseAccepted.fourMainCasePercentage.value,
        };
      });

      return mappedData.slice(0, this.division.firstFlag);
    },
    caseHandledFieldChange(field) {
      this.caseHandledField = field;
    },
    sortedArrayWithFinishedCount() {
      let data = [];
      data = data.concat(this.comparisonRange);

      data.sort((a, b) => {
        return (
          b.caseHandled.finishedPercentage.value -
          a.caseHandled.finishedPercentage.value
        );
      });

      let mappedData = data.map((i) => {
        return {
          name: i.name,
          count: i.caseHandled.finishedCount.value,
          percentage: i.caseHandled.finishedPercentage.value,
        };
      });

      return mappedData.slice(0, this.division.firstFlag);
    },
    sortedArrayWithFinishedRate() {
      let data = [];
      data = data.concat(this.comparisonRange);

      data.sort((a, b) => {
        return (
          b.caseHandled.finishedRate.score - a.caseHandled.finishedRate.score
        );
      });

      let mappedData = data.map((i) => {
        return {
          name: i.name,
          percentage: i.caseHandled.finishedRate.value,
        };
      });

      return mappedData.slice(0, this.division.firstFlag);
    },
    sortedArrayWithUnfinishedCount() {
      let data = [];
      data = data.concat(this.comparisonRange);

      data.sort((a, b) => {
        return (
          b.caseHandled.unfinishedCount.score -
          a.caseHandled.unfinishedCount.score
        );
      });

      let mappedData = data.map((i) => {
        return {
          name: i.name,
          count: i.caseHandled.unfinishedCount.value,
          score: i.caseHandled.unfinishedCount.score,
        };
      });

      return mappedData.slice(0, this.division.firstFlag);
    },
    sortedArrayWithCluesAccepted() {
      let data = [];
      data = data.concat(this.comparisonRange);

      let mappedData = data.map((i) => {
        return {
          name: i.name,
          score:
            i.clueBidirectionalTransfer.clueAccept.count.score +
            i.clueBidirectionalTransfer.clueAccept.caseRate.score +
            i.clueBidirectionalTransfer.clueAccept.fourMainPercentage.score,
        };
      });

      mappedData.sort((a, b) => {
        return b.score - a.score;
      });

      return mappedData.slice(0, this.division.firstFlag);
    },
    sortedArrayWithInternalClues() {
      let data = [];
      data = data.concat(this.comparisonRange);

      let mappedData = data.map((i) => {
        return {
          name: i.name,
          score:
            i.clueBidirectionalTransfer.internalTransfer.count.score +
            i.clueBidirectionalTransfer.internalTransfer.caseRate.score +
            i.clueBidirectionalTransfer.internalTransfer.fourMainPercentage
              .score,
        };
      });

      mappedData.sort((a, b) => {
        return b.score - a.score;
      });

      return mappedData.slice(0, this.division.firstFlag);
    },
    sortedArrayWithExternalClues() {
      let data = [];
      data = data.concat(this.comparisonRange);

      let mappedData = data.map((i) => {
        return {
          name: i.name,
          score:
            i.clueBidirectionalTransfer.externalTransfer.count.score +
            i.clueBidirectionalTransfer.externalTransfer.caseRate.score +
            i.clueBidirectionalTransfer.externalTransfer.fourMainPercentage
              .score,
        };
      });

      mappedData.sort((a, b) => {
        return b.score - a.score;
      });

      return mappedData.slice(0, this.division.firstFlag);
    },
    clueParentChange(val) {
      let value = clueNameMap.get(val);
      let displayArray = Object.keys(value).filter((i) => {
        return i !== "current";
      });

      if (displayArray.length === 0) {
        this.clueAppendix = "件";
        this.clueCity =
          this.currentObject.clueBidirectionalTransfer[value.current].value;
        this.clueSubKey = "";
        this.clueSubKeys = [];

        let data = [];
        data = data.concat(this.comparisonRange);
        let mappedData = data.map((i) => {
          return {
            name: i.name,
            actValue: i.clueBidirectionalTransfer[value.current].value,
            score: i.clueBidirectionalTransfer[value.current].score,
          };
        });

        mappedData.sort((a, b) => {
          return b.score - a.score;
        });

        this.clueFirstThree = mappedData.slice(0, this.division.firstFlag);
        return;
      }

      this.clueSubKey = displayArray[0];
      this.clueSubKeys = displayArray;

      this.clueSubKeyChange(this.clueSubKey);
    },
    clueSubKeyChange(val) {
      let parentPath = clueNameMap.get(this.clueParentKey);
      let currentPath = parentPath[val];

      if (val === "受理数" || val === "线索数") {
        this.clueAppendix = "件";
      } else if (val.includes("组合评价")) {
        this.clueAppendix = "分";
        this.clueCity =
          this.currentObject.clueBidirectionalTransfer[parentPath.current][
            currentPath
          ].score;

        let data = [];
        data = data.concat(this.comparisonRange);
        let mappedData = data.map((i) => {
          return {
            name: i.name,
            actValue:
              i.clueBidirectionalTransfer[parentPath.current][currentPath]
                .score,
            score:
              i.clueBidirectionalTransfer[parentPath.current][currentPath]
                .score,
          };
        });

        mappedData.sort((a, b) => {
          return b.score - a.score;
        });

        this.clueFirstThree = mappedData.slice(0, this.division.firstFlag);
        return;
      } else {
        this.clueAppendix = "%";
      }
      this.clueCity =
        this.currentObject.clueBidirectionalTransfer[parentPath.current][
          currentPath
        ].value;

      let data = [];
      data = data.concat(this.comparisonRange);
      let mappedData = data.map((i) => {
        return {
          name: i.name,
          actValue:
            i.clueBidirectionalTransfer[parentPath.current][currentPath].value,
          score:
            i.clueBidirectionalTransfer[parentPath.current][currentPath].score,
        };
      });

      mappedData.sort((a, b) => {
        return b.score - a.score;
      });

      this.clueFirstThree = mappedData.slice(0, this.division.firstFlag);
    },
    qeParentChange(val) {
      let value = qeNameMap.get(val);

      if (value === undefined) {
        this.qeSubKey = null;
        this.qeSubKeys = [];

        this.qeCity = "";
        this.qeFirstThree.clear();
        this.qeLastThree.clear();

        return;
      } else if (typeof value === "string") {
        this.qeSubKey = null;
        this.qeSubKeys = [];

        this.qeCity = this.currentObject.qualityAndEfficiency[value].value;
        this.qeAppendix = val.includes("率", Math.max(val.length - 6, 0))
          ? "%"
          : "";

        let branchFieldObj = this.comparisonRange.map((i) => {
          return {
            name: i.name,
            actValue: i.qualityAndEfficiency[value].value,
            score: i.qualityAndEfficiency[value].score,
          };
        });

        branchFieldObj.sort((a, b) => {
          return b.score - a.score;
        });

        this.qeFirstThree = branchFieldObj.slice(0, this.division.firstFlag);
      } else {
        this.qeSubKeys = Object.keys(value).filter((i) => i !== "current");
        this.qeSubKey = this.qeSubKeys[0];

        this.qeParentKey = val;
        this.qeSubKeyChange(this.qeSubKey);
      }
    },
    qeSubKeyChange(val) {
      let keyPath = qeNameMap.get(this.qeParentKey);
      let currentKey = keyPath[val];

      this.qeCity =
        this.currentObject.qualityAndEfficiency[keyPath.current][
          currentKey
        ].value;

      if (val.includes("率", Math.max(val.length -7, 0))) {
        this.qeAppendix = "%";
      } else if (val.includes("组合评价")) {
        this.qeAppendix = "分";
        this.qeCity =
          this.currentObject.qualityAndEfficiency[keyPath.current][
            currentKey
          ].score;

        let shortCut = this.comparisonRange.map((i) => {
          return {
            name: i.name,
            actValue: i.qualityAndEfficiency[keyPath.current][currentKey].score,
            score: i.qualityAndEfficiency[keyPath.current][currentKey].score,
          };
        });
        shortCut.sort((a, b) => {
          return b.score - a.score;
        });

        this.qeFirstThree = shortCut.slice(0, this.division.firstFlag);
        return;
      } else {
        this.qeAppendix = "";
      }

      let branchFieldObj = this.jurisdictionCourt.map((i) => {
        return {
          name: i.name,
          actValue: i.qualityAndEfficiency[keyPath.current][currentKey].value,
          score: i.qualityAndEfficiency[keyPath.current][currentKey].score,
        };
      });
      branchFieldObj.sort((a, b) => {
        return b.score - a.score;
      });

      this.qeFirstThree = branchFieldObj.slice(0, this.division.firstFlag);
    },
    getSeparatedData() {
      switch (this.fieldId) {
        /*
        11-14是四个基层院含辖区
        */
        case 11:
          return (
            this.branchCourtWithDistrict.find((i) =>
              i.name.includes("一分院")
            ) ?? buildBranchData()
          );
        case 12:
          return (
            this.branchCourtWithDistrict.find((i) =>
              i.name.includes("二分院")
            ) ?? buildBranchData()
          );
        case 13:
          return (
            this.branchCourtWithDistrict.find((i) =>
              i.name.includes("三分院")
            ) ?? buildBranchData()
          );
        case 14:
          return (
            this.branchCourtWithDistrict.find((i) =>
              i.name.includes("四分院")
            ) ?? buildBranchData()
          );
        /*
        21-24是四个基层院
        */
        case 21:
          return (
            this.branchCourt.find((i) => i.name === "一分院") ??
            buildBranchData()
          );
        case 22:
          return (
            this.branchCourt.find((i) => i.name === "二分院") ??
            buildBranchData()
          );
        case 23:
          return (
            this.branchCourt.find((i) => i.name === "三分院") ??
            buildBranchData()
          );
        case 24:
          return (
            this.branchCourt.find((i) => i.name === "四分院") ??
            buildBranchData()
          );
        /*
        case 301-316分别是：
        "东城院",
        "西城院",
        "朝阳院",
        "丰台院",
        "石景山院",
        "海淀院",
        "门头沟院",
        "房山院",
        "通州院",
        "顺义院",
        "昌平院",
        "大兴院",
        "怀柔院",
        "平谷院",
        "密云院",
        "延庆院",
        */
        case 301:
          return (
            this.jurisdictionCourt.find((i) => i.name === "东城院") ??
            buildBranchData()
          );
        case 302:
          return (
            this.jurisdictionCourt.find((i) => i.name === "西城院") ??
            buildBranchData()
          );
        case 303:
          return (
            this.jurisdictionCourt.find((i) => i.name === "朝阳院") ??
            buildBranchData()
          );
        case 304:
          return (
            this.jurisdictionCourt.find((i) => i.name === "丰台院") ??
            buildBranchData()
          );
        case 305:
          return (
            this.jurisdictionCourt.find((i) => i.name === "石景山院") ??
            buildBranchData()
          );
        case 306:
          return (
            this.jurisdictionCourt.find((i) => i.name === "海淀院") ??
            buildBranchData()
          );
        case 307:
          return (
            this.jurisdictionCourt.find((i) => i.name === "门头沟院") ??
            buildBranchData()
          );
        case 308:
          return (
            this.jurisdictionCourt.find((i) => i.name === "房山院") ??
            buildBranchData()
          );
        case 309:
          return (
            this.jurisdictionCourt.find((i) => i.name === "通州院") ??
            buildBranchData()
          );
        case 310:
          return (
            this.jurisdictionCourt.find((i) => i.name === "顺义院") ??
            buildBranchData()
          );
        case 311:
          return (
            this.jurisdictionCourt.find((i) => i.name === "昌平院") ??
            buildBranchData()
          );
        case 312:
          return (
            this.jurisdictionCourt.find((i) => i.name === "大兴院") ??
            buildBranchData()
          );
        case 313:
          return (
            this.jurisdictionCourt.find((i) => i.name === "怀柔院") ??
            buildBranchData()
          );
        case 314:
          return (
            this.jurisdictionCourt.find((i) => i.name === "平谷院") ??
            buildBranchData()
          );
        case 315:
          return (
            this.jurisdictionCourt.find((i) => i.name === "密云院") ??
            buildBranchData()
          );
        case 316:
          return (
            this.jurisdictionCourt.find((i) => i.name === "延庆院") ??
            buildBranchData()
          );
        /*
        case 41-43分别是：
        "北京铁检院",
        "天津铁检院",
        "石家庄铁检院"
        */
        case 41:
          return (
            this.railwayCourt.find((i) => i.name === "北京铁检院") ??
            buildBranchData()
          );
        case 42:
          return (
            this.railwayCourt.find((i) => i.name === "天津铁检院") ??
            buildBranchData()
          );
        case 43:
          return (
            this.railwayCourt.find((i) => i.name === "石家庄铁检院") ??
            buildBranchData()
          );
        /*
        case 51-52分别是：
        "团河院",
        "清河院"
        */
        case 51:
          return (
            this.dispatchCourt.find((i) => i.name === "团河院") ??
            buildBranchData()
          );
        case 52:
          return (
            this.dispatchCourt.find((i) => i.name === "清河院") ??
            buildBranchData()
          );
        default:
          return this.wholeCity;
      }
    },
    getComparisonArray() {
      let data = [];

      switch (this.fieldId) {
        case 11:
        case 12:
        case 13:
        case 14:
          this.division.firstFlag = 2;
          this.division.secondFlag = -2;
          return data.concat(this.branchCourtWithDistrict);
        case 21:
        case 22:
        case 23:
        case 24:
          this.division.firstFlag = 2;
          this.division.secondFlag = -2;
          return data.concat(this.branchCourt);
        case 301:
        case 302:
        case 303:
        case 304:
        case 305:
        case 306:
        case 307:
        case 308:
        case 309:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 315:
        case 316:
          this.division.firstFlag = 6;
          this.division.secondFlag = -3;
          return data.concat(this.jurisdictionCourt);
        case 41:
        case 42:
        case 43:
          this.division.firstFlag = 2;
          this.division.secondFlag = -1;
          return data.concat(this.railwayCourt);
        case 51:
        case 52:
          this.division.firstFlag = 2;
          this.division.secondFlag = -1;
          return data.concat(this.dispatchCourt);
        default:
          this.division.firstFlag = 6;
          this.division.secondFlag = -3;
          return data.concat(this.jurisdictionCourt);
      }
    },
    getYear() {
      let date = new Date();
      return date.getFullYear();
    },
  },
  created() {
    this.darkMode = false;
    const fieldParam = this.$route.query.fieldId;

    this.fieldId = parseInt(fieldParam ?? "0");
  },
  async mounted() {
    if (!(await this.loadXlsx())) {
      return;
    }

    this.loading?.setText("正在解析Excel...");
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const sheetName = this.workBook.SheetNames[0];
      this.sheet ??= this.workBook.Sheets[sheetName];

      this.loadWholeCityData();
      this.loadCourtData();

      this.currentObject = this.getSeparatedData();
      this.comparisonRange = this.getComparisonArray();

      this.clueParentChange(this.clueParentKey);
      this.qeParentChange(this.qeParentKey);
    } catch (err) {
      console.log(err);
      alert("解析Excel出错！");
      return;
    }

    this.loading?.setText("正在绘图...");
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      this.drawRankFigure(this.rankFigureField);
      this.drawStructureDistributionFigure(this.structureDistributionField);
    } catch (err) {
      console.log(err);
      alert("绘图出错！");
      return;
    }

    this.loading?.close();
  },
};
</script>

<style scoped>
.el-footer {
  line-height: 60px;
  text-align: center;
}

.el-row {
  align-items: center;
}

.aligned-el-col {
  display: flex;
  justify-content: left;
}

.el-select {
  width: 100%;
}

#rank-figure {
  width: 100%;
  height: 420px;
}

#structure-distribution-figure {
  width: 160px;
  height: 220px;
}
</style>