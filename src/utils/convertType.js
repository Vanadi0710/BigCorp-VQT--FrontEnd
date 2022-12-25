
export function convertBranchType(branchType) {
    switch(branchType) {
        case 'FACTORY': return 'cơ sở sản xuất' 
        case 'DISTRIBUTOR': return 'trung tâm phân phối'
        case 'WARRANTY_CENTER': return 'trung tâm bảo hành'
        default: return branchType
    }
}

export function convertProductProcessType(processType) {

}

export function convertRoleType(roleType) {
    switch(roleType) {
        case 'ADMIN': return 'admin'
        case 'PRODUCER': return 'nhà sản xuất'
        case 'DISTRIBUTOR': return 'nhà phân phối'
        case 'WARRANTY': return 'nhà bảo hành'
        default: return roleType
    }
}