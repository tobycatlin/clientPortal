function(doc) {
	if (doc.doc_type === "ContentDoc") {
		emit(doc.category, doc);
	}
};