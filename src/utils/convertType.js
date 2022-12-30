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
      return "orange";

    case "FAILED_NEED_TO_WARRANTY":
    case "FAILED_NEED_TO_FACTORY":
    case "FAILED_NEED_TO_SUMMON":
    case "FAILED_SENT_TO_FACTORY":
      return "red";

    default:
      return "blue";
  }
}

export function convertStatusToColor(status) {
  switch (status) {
    case "PENDING":
      return "orange";
    case "CANCELED":
      return "red";
    case "CONFIRMED":
      return "blue";

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

export function convertTransportType(transportType) {
  switch (transportType) {
    case "TAKE_TO_DISTRIBUTOR_BY_FACTORY":
      return "xuất cho đại lý";
    case "TAKE_TO_DISTRIBUTOR_BY_WARRANTY_CENTER":
      return "xuất cho đại lý";
    case "FAILED_NEED_TO_WARRANTY":
      return "cần bảo hành";
    case "FAILED_SENT_TO_FACTORY":
      return "lỗi xuất cho nhà máy";
    case "RETURNED_TO_FACTORY":
      return "trả về nhà máy";
    default:
      return transportType;
  }
}

export function convertProductStatusType(status) {
  switch (status) {
    case "NEWLY_PRODUCED":
      return "mới sản xuất";
    case "IMPORTED_STORE":
      return "mới nhập vào kho";
    case "TAKE_TO_DISTRIBUTOR_BY_FACTORY":
      return "nhập từ nhà máy";
    case "TAKE_TO_DISTRIBUTOR_BY_WARRANTY_CENTER":
      return "nhận lại từ trung tâm";
    case "SOLD":
      return "đã bán";
    case "FAILED_NEED_TO_WARRANTY_CENTER":
      return "lỗi cần bảo hành";
    case "TAKE_FAILED_TO_WARRANTY_CENTER":
      return "đưa đến bảo hành";
    case "UNDER_WARRANTY":
      return "đang bảo hành";
    case "WARRANTY_DONE":
      return "đã bảo hành xong";
    case "WARRANTY_RETURNED_TO_CUSTOMER":
      return "đã trả lại cho khách";
    case "FAILED_NEED_TO_FACTORY":
      return "lỗi không thể sửa";
    case "FAILED_SENT_TO_FACTORY":
      return "lỗi";
    case "FAILED_NEED_TO_SUMMON":
      return "bị thu hồi để sửa";
    case "RETURNED_TO_FACTORY":
      return "không bán được";
    default:
      return status;
  }
}
