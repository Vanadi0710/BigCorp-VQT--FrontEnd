import Moment from "moment";

export function convertBranchType(branchType) {
  switch (branchType) {
    case "FACTORY":
      return "cơ sở sản xuất";
    case "DISTRIBUTOR":
      return "trung tâm phân phối";
    case "WARRANTY_CENTER":
      return "trung tâm bảo hành";
    default:
      return branchType;
  }
}

export function convertProductProcessType(processType) {
  switch (processType) {
    case "NEWLY_PRODUCED":
      return "đã sản xuất";
    case "IMPORTED_STORE":
      return "đã nhập vào kho";
    case "TAKE_TO_DISTRIBUTOR":
      return "đã về phân phối";
    case "SOLD":
      return "đã bán";
    case "FAILED_NEED_TO_WARRANTY":
      return "cần bảo hành";
    case "UNDER_WARRANTY":
      return "đang bảo hành";
    case "WARRANTY_DONE":
      return "đã sửa xong";
    case "DISTRIBUTOR_RETURNED_TO_CUSTOMER":
      return "đã trả khách";
    case "FAILED_NEED_TO_FACTORY":
      return "lỗi không thể sửa";
    case "FAILED_SENT_TO_FACTORY":
      return "lỗi mới về nhà máy";
    case "FAILED_NEED_TO_SUMMON":
      return "lỗi cần triệu hồi";
    case "RETURNED_TO_FACTORY":
      return "tồn kho về nhà máy";
    default:
      return "";
  }
}

export function convertProcessTypeToColor(processType) {
  switch (processType) {
    case "NEWLY_PRODUCED":
    case "IMPORTED_STORE":
    case "TAKE_TO_DISTRIBUTOR":
    case "WARRANTY_DONE":
    case "DISTRIBUTOR_RETURNED_TO_CUSTOMER":
    case "SOLD":
      return "blue";

    case "UNDER_WARRANTY":
    case "RETURNED_TO_FACTORY":
      return "volcano-4";

    case "FAILED_NEED_TO_WARRANTY":
    case "FAILED_NEED_TO_FACTORY":
    case "FAILED_NEED_TO_SUMMON":
    case "FAILED_SENT_TO_FACTORY":
      return "volcano-7";

    default:
      return "blue";
  }
}

export function convertRoleType(roleType) {
  switch (roleType) {
    case "ADMIN":
      return "admin";
    case "PRODUCER":
      return "nhà sản xuất";
    case "DISTRIBUTOR":
      return "nhà phân phối";
    case "WARRANTY":
      return "nhà bảo hành";
    default:
      return roleType;
  }
}

export function convertDate(date) {
  return Moment(date).format("DD-MM-YYYY");
}
